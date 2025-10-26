import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import authApi from '@/apis/auth';


interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  phone: string;
}

interface UseAuthReturn {
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (data: RegisterPayload) => Promise<boolean>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      await authApi.login(email, password);
      return true; // Login successful
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setError(err.response?.data?.message || 'Đăng nhập thất bại');
      return false; // Login failed
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterPayload): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      await authApi.register(data);
      return true; // Registration successful
    } catch (err: any) {
      setError(err.response?.data?.message || 'Đăng ký thất bại');
      return false; // Registration failed
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authApi.logout();
      navigate('/login');
    } catch (err: any) {
      console.error('Lỗi khi đăng xuất:', err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, login, register, logout };
}

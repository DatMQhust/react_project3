import { FC, useCallback } from 'react';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import styles from './login.module.css';
import { useAuth } from '@/hooks';

const LoginPage: FC = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
      const toastId = toast.loading('Logging in...');
      
      const success = await login(email, password);
      
      if (success) {
        toast.success('Login successful!', {
          id: toastId,
          duration: 2000
        });
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error('Login failed. Please check your credentials.', {
          id: toastId,
          duration: 3000 
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    };

  return (
    <div className={styles.loginContainer}>
      <LoginForm onSubmit={handleLogin} loading={loading} />
    </div>
  );
};

export default LoginPage;

import { FC } from 'react';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import styles from './login.module.css';
import { useAuth } from '@/hooks';


const RegisterPage: FC = () => {
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (data: { email: string; password: string; name: string; phone: string }) => {
      const toastId = toast.loading('Registering...');

      const success = await register(data);

      if (success) {
        toast.success('Registration successful!', {
          id: toastId,
          duration: 2000
        });
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error('Registration failed. Please check your credentials.', {
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
      <RegisterForm onSubmit={handleRegister} loading={loading} />
    </div>
  );
};

export default RegisterPage;

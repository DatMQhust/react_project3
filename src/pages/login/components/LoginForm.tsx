import { FC } from 'react';

import { FaGoogle } from 'react-icons/fa';

import styles from '../login.module.css';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit, loading = false }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginCard}>
      <h1 className={styles.title}>Chào mừng bạn trở lại!</h1>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="Nhập email của bạn"
          required
          disabled={loading}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Mật khẩu
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
          placeholder="Nhập mật khẩu của bạn"
          required
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        className={`${styles.button} ${loading ? styles.buttonDisabled : ''}`}
        disabled={loading} 
      >
        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </button>

      <a href="#" className={styles.forgotPassword}>
        Quên mật khẩu?
      </a>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerText}>hoặc tiếp tục với</span>
        <div className={styles.dividerLine} />
      </div>

      <button
        type="button"
        className={styles.socialButton}
        disabled={loading}
      >
        <FaGoogle className="mr-2" /> Đăng nhập với Google
      </button>
    </form>
  );
};

export default LoginForm;

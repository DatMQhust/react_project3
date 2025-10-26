import { FC } from 'react';

import { FaGoogle, FaGithub } from 'react-icons/fa';

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
      <h1 className={styles.title}>Welcome Back</h1>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="Enter your email"
          required
          disabled={loading}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
          placeholder="Enter your password"
          required
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        className={`${styles.button} ${loading ? styles.buttonDisabled : ''}`}
        disabled={loading} 
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>

      <a href="#" className={styles.forgotPassword}>
        Forgot your password?
      </a>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerText}>or continue with</span>
        <div className={styles.dividerLine} />
      </div>

      <button
        type="button"
        className={styles.socialButton}
        disabled={loading}
      >
        <FaGoogle className="mr-2" /> Sign in with Google
      </button>

      <button
        type="button"
        className={styles.socialButton}
        disabled={loading}
      >
        <FaGithub className="mr-2" /> Sign in with GitHub
      </button>
    </form>
  );
};

export default LoginForm;

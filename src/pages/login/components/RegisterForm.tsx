import { FC } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './register.module.css';


interface RegisterFormProps {
  onSubmit: (data: { email: string; password: string; name: string; phone: string }) => void;
  loading?: boolean;
}

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit, loading = false }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    onSubmit({ email, password, name, phone });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.registerCard}>
      <div className={styles.leftSection}>
        <div>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Join us today! Enter your details to get started.</p>
        </div>

        <div className={styles.socialSection}>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>quick access</span>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.socialButtons}>
            <button
              type="button"
              className={styles.socialButton}
              disabled={loading}
            >
              <FaGoogle className="mr-2" />
              Google
            </button>

            <button
              type="button"
              className={styles.socialButton}
              disabled={loading}
            >
              <FaGithub className="mr-2" />
              GitHub
            </button>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="your.email@example.com"
            required
            disabled={loading}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="John Doe"
            required
            disabled={loading}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={styles.input}
            placeholder="+1234567890"
            pattern="[0-9]{10,}"
            required
            disabled={loading}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="••••••••"
            required
            disabled={loading}
            minLength={6}
          />
        </div>

        <button
          type="submit"
          className={`${styles.button} ${loading ? styles.buttonDisabled : ''}`}
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

        <p className={styles.haveAccount}>
          Already have an account?
          <Link to="/login" className={styles.haveAccountLink}>
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;

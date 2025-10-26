import { FC } from 'react';

import { FaGoogle } from 'react-icons/fa';
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
          <h1 className={styles.title}>Đăng ký ngay!</h1>
          <p className={styles.subtitle}>Nhập thông tin để khám phá các sự kiện hấp dẫn.</p>
        </div>

        <div className={styles.socialSection}>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>Truy cập nhanh</span>
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
          <label htmlFor="name" className={styles.label}>Họ và tên</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Nguyễn Văn A"
            required
            disabled={loading}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.label}>Số điện thoại</label>
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
          <label htmlFor="password" className={styles.label}>Mật khẩu</label>
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
          {loading ? 'Đang tạo tài khoản...' : 'Tạo tài khoản'}
        </button>

        <p className={styles.haveAccount}>
          Đã có tài khoản?
          <Link to="/login" className={styles.haveAccountLink}>
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;

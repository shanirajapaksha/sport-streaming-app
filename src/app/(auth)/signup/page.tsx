'use client';
import Link from 'next/link';
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser, FiPlay } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from './signup.module.css';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SplitSignupPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();
      if (res.ok) {
        alert('🎉 Registration successful!');
        window.location.href = '/signin';
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error('Error connecting to backend:', error);
      alert('❌ Could not connect to the server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.heroContent}>
          <div className={styles.logo}>SPORTSTREAM</div>
          
          <h1 className={styles.heroTitle}>STREAM YOUR <span className={styles.highlight}>FAVORITE</span> SPORTS</h1>
          
        
          
          <div className={styles.featuredEvent}>
            <h3 className={styles.eventLeague}>PREMIER LEAGUE</h3>
            <h2 className={styles.eventTeams}>MANCHESTER UNITED vs LIVERPOOL</h2>
            <button className={styles.watchButton}>
              <FiPlay className={styles.playIcon} /> WATCH NOW
            </button>
          </div>
          
          <div className={styles.downloadSection}>
            <p className={styles.downloadText}>DOWNLOAD THE APP</p>
            <div className={styles.appButtons}>
              <button className={styles.downloadButton}>
                <FaApple className={styles.storeIcon} />
                <div className={styles.storeText}>
                  <span>Download on the</span>
                  <span>App Store</span>
                </div>
              </button>
              <button className={styles.downloadButton}>
                <FaGooglePlay className={styles.storeIcon} />
                <div className={styles.storeText}>
                  <span>GET IT ON</span>
                  <span>Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.signupCard}>
          <h2 className={styles.signupTitle}>Create Your Account</h2>
          <p className={styles.signupSubtitle}>Join our community of sports fans</p>

          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiUser className={styles.inputIcon} />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={styles.formInput}
                  required
                />
                <div className={styles.inputUnderline}></div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiMail className={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={styles.formInput}
                  required
                />
                <div className={styles.inputUnderline}></div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiLock className={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={styles.formInput}
                  required
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                <div className={styles.inputUnderline}></div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiLock className={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className={styles.formInput}
                  required
                />
                <div className={styles.inputUnderline}></div>
              </div>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spinner}></span>
              ) : (
                'CREATE ACCOUNT'
              )}
            </button>

            <div className={styles.loginPrompt}>
              Already have an account?{' '}
              <Link href="/signin" className={styles.loginLink}>Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
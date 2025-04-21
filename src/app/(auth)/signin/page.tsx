'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './signin.module.css' ;


const featuredEvents = [
  { id: 1, teams: "Real Madrid vs Barcelona", league: "La Liga", time: "LIVE NOW" },
  { id: 2, teams: "Warriors vs Celtics", league: "NBA Finals", time: "8:30 PM" },
  { id: 3, teams: "Australia vs England", league: "Ashes Series", time: "TOMORROW" }
];

export default function SplitSigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeEvent, setActiveEvent] = useState(0);
  const router = useRouter();

 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

 

  return (
    <div className={styles.container}>
    
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.logo}
          >
            SPORTSTREAM
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.heroTitle}
          >
            WELCOME BACK TO <span className={styles.highlight}>SPORTSTV</span>
          </motion.h1>

          <div className={styles.eventsCarousel}>
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={`${styles.eventCard} ${index === activeEvent ? styles.active : ''}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: index === activeEvent ? 1 : 0.5,
                  x: index === activeEvent ? 0 : 50,
                  scale: index === activeEvent ? 1.05 : 1
                }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveEvent(index)}
              >
                <div className={styles.eventBadge}>
                  <span className={styles.liveDot}></span> {event.time}
                </div>
                <h3 className={styles.eventLeague}>{event.league}</h3>
                <h2 className={styles.eventTeams}>{event.teams}</h2>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.watchButton}
                >
                  WATCH NOW
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={styles.featuresList}
          >
            {[
              'Live games from 50+ sports leagues',
              '4K Ultra HD streaming quality',
              'Personalized recommendations',
              'Multi-device compatibility',
              'Exclusive commentary and analysis'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={styles.featureItem}
              >
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className={styles.heroBackground}>
          <div className={styles.circleAnimation}></div>
          <div className={styles.circleAnimation2}></div>
          <div className={styles.gridPattern}></div>
        </div>
      </div>

  
      <div className={styles.formSection}>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.formContainer}
        >
          <div className={styles.formHeader}>
            <h2>Sign In to <span>SportsTV</span></h2>
            <p>Continue your sports streaming experience</p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.errorMessage}
            >
              {error}
            </motion.div>
          )}

          <form className={styles.signinForm}>
            <motion.div 
              whileFocus={{ scale: 1.02 }}
              className={styles.inputGroup}
            >
              <FiMail className={styles.inputIcon} />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className={styles.inputUnderline}></div>
            </motion.div>

            <motion.div 
              whileFocus={{ scale: 1.02 }}
              className={styles.inputGroup}
            >
              <FiLock className={styles.inputIcon} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            </motion.div>

            <div className={styles.forgotPassword}>
              <Link href="/forgot-password" className={styles.forgotPasswordLink}>
                Forgot password?
              </Link>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spinner}></span>
              ) : (
                <>
                  SIGN IN <FiArrowRight />
                </>
              )}
            </motion.button>

            <div className={styles.socialLogin}>
              <p>Or sign in with</p>
              <div className={styles.socialIcons}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <FaTwitter className={styles.socialIcon} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <FaFacebook className={styles.socialIcon} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <FaInstagram className={styles.socialIcon} />
                </motion.div>
              </div>
            </div>

            <div className={styles.signupPrompt}>
              Don't have an account?{' '}
              <Link href="/signup" className={styles.signupLink}>Sign Up</Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
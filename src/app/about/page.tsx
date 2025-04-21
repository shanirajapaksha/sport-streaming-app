// pages/index.tsx
"use client"; 
import { useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('live');
  
  return (
    <div className={styles.container}>
   
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <span className={styles.logoSports}>SPORTSTREAM</span>
            
          </div>
          
          <div className={styles.navTabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'live' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('live')}
            >
              <span className={styles.tabIcon}></span>
              <span>LIVE</span>
             
            </button>
            
            <button 
              className={`${styles.tab} ${activeTab === 'schedule' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('schedule')}
            >
              <span className={styles.tabIcon}></span>
              <span>SCHEDULE</span>
              
            </button>
            
            <button 
              className={`${styles.tab} ${activeTab === 'ondemand' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('ondemand')}
            >
              <span className={styles.tabIcon}></span>
              <span>ON DEMAND</span>
            </button>
          </div>
          
        </div>
      </nav>

   
      <section className={styles.hero}>
        <div className={styles.videoOverlay}></div>
        <Image
            src="/background (2).jpg"
            alt="Sports background"
            fill
            className={styles.heroImage}
            priority
            quality={100}
          />
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            STREAM YOUR <span>FAVORITE</span> SPORTS
          </h1>
          <p className={styles.heroSubtitle}>
            Live matches, highlights, and exclusive content in 4K HDR
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              WATCH NOW
              <span className={styles.buttonArrow}>→</span>
            </button>
            <button className={styles.secondaryButton}>
              FREE TRIAL
            </button>
          </div>
        </div>
      </section>

    
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.livePulse}></span>
            LIVE NOW
          </h2>
          <button className={styles.viewAllButton}>VIEW ALL</button>
        </div>
        
        <div className={styles.liveGrid}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredTag}>FEATURED</div>
            <div className={styles.matchInfo}>
              <span className={styles.sportType}>BASKETBALL</span>
              <h3 className={styles.matchTitle}>TEAM A vs TEAM B</h3>
              <div className={styles.matchMeta}>
                <span className={styles.matchLeague}>SportsCenter</span>
                <span className={styles.matchType}>LEAGUE MATCH</span>
              </div>
            </div>
            <button className={styles.watchLiveButton}>
              WATCH LIVE
              <span className={styles.liveIndicator}></span>
            </button>
            <Image 
              src="/4 (2).jpg" 
              alt="Basketball Match" 
              fill
              className={styles.featuredImage}
            />
          </div>
          
          <div className={styles.liveCard}>
            <div className={styles.liveTag}>LIVE</div>
            <Image 
              src="/3.jpg" 
              alt="Football Match" 
              width={200}
              height={120}
              className={styles.liveImage}
            />
            <div className={styles.liveCardContent}>
              <h4>MAN CITY vs LIVERPOOL</h4>
              <p>Premier League • 63'</p>
              <div className={styles.liveScore}>
                <span>2</span>
                <span>-</span>
                <span>1</span>
              </div>
            </div>
          </div>

          <div className={styles.liveCard}>
            <div className={styles.liveTag}>LIVE</div>
            <Image 
              src="/2.jpg" 
              alt="Football Match" 
              width={200}
              height={120}
              className={styles.liveImage}
            />
            <div className={styles.liveCardContent}>
              <h4>MAN CITY vs LIVERPOOL</h4>
              <p>Premier League • 63'</p>
              <div className={styles.liveScore}>
                <span>2</span>
                <span>-</span>
                <span>1</span>
              </div>
            </div>
          </div>
          
          
      
          
        </div>
      </section>

   
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>ABOUT SPORTS TV</h2>
            <p>
              Premium streaming for sports enthusiasts. We provide integrated 
              coverage and exclusive content with cutting-edge technology. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque dolor libero, facilisis ut aliquet vel, lobortis 
              eget mauris.
            </p>
            
            <div className={styles.downloadButtons}>
              <button className={styles.downloadButton}>
                <Image 
                  src="/icon.png" 
                  alt="Download on App Store"
                  width={370}
                  height={70}
                />
              </button>
            </div>
          </div>
          
          <div className={styles.aboutImage}>
            <Image 
              src="/4.jpg" 
              alt="Sports TV App"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

   
      <footer >
        <div className={styles.footerBottom}>
          <p>© 2025 SPORTS-TV.NETWORK. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
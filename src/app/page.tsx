'use client';
import Link from 'next/link';
import styles from "./page.module.css";
import { 
  FaPlay, FaSearch, FaEnvelope, FaInfoCircle, FaCalendarAlt, 
  FaFire, FaEye, FaUsers, FaFilter, FaClock, FaChevronRight,
  FaHistory, FaCalendarDay, FaArrowUp, FaArrowDown
} from 'react-icons/fa';
import { useState } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('live');
  const [selectedSport, setSelectedSport] = useState('all');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  
  const sports = [
    'Football', 'Basketball', 'Tennis', 'Cricket', 
    'Rugby', 'Boxing', 'Hockey', 'Baseball'
  ];

  
  const nowStreaming = [
    { 
      id: 1, 
      title: 'Premier League: Arsenal vs Chelsea', 
      viewers: '12.5K', 
      sport: 'Football',
      image: '/1.jpg'
    },
    { 
      id: 2, 
      title: 'NBA: Lakers vs Warriors', 
      viewers: '8.2K', 
      sport: 'Basketball',
      image: '/4 (2).jpg'
    },
    { 
      id: 3, 
      title: 'Wimbledon: Quarter Finals', 
      viewers: '5.7K', 
      sport: 'Tennis',
      image: '/5.jpg'
    },
  ];

 
  const currentStreams = [
    { id: 4, title: 'Champions League: Barcelona vs PSG', time: 'Now', sport: 'Football' },
    { id: 5, title: 'NBA Playoffs: Celtics vs Heat', time: 'Now', sport: 'Basketball' },
  ];

  const earlierTodayStreams = [
    { id: 6, title: 'T20 World Cup: India vs Australia', time: '09:30 AM', sport: 'Cricket' },
    { id: 7, title: 'Six Nations: England vs France', time: '11:45 AM', sport: 'Rugby' },
  ];

 
  const upcomingEvents = [
    { id: 8, title: 'Champions League Final', date: '2023-06-10', sport: 'Football' },
    { id: 9, title: 'NBA Finals Game 7', date: '2023-06-15', sport: 'Basketball' },
    { id: 10, title: 'Wimbledon Finals', date: '2023-07-09', sport: 'Tennis' },
  ];


  const matchHistory = [
    { id: 11, title: 'Premier League: Man City vs Liverpool', date: '2023-05-20', result: '3-2' },
    { id: 12, title: 'NBA: Warriors vs Lakers', date: '2023-05-18', result: '112-105' },
    { id: 13, title: 'ICC Final: Australia vs India', date: '2023-05-15', result: 'AUS by 6 wickets' },
  ];


  const featuredContent = {
    trending: [
      { id: 14, title: 'World Cup Qualifiers', viewers: '15.3K' },
      { id: 15, title: 'Grand Slam Tennis', viewers: '9.1K' },
    ],
    mostWatched: [
      { id: 16, title: 'Championship Playoff', viewers: '25.7K' },
      { id: 17, title: 'Boxing Heavyweight', viewers: '18.9K' },
    ],
    mostSubscribed: [
      { id: 18, title: 'Premier League Pass', subscribers: '102K' },
      { id: 19, title: 'NBA Season Ticket', subscribers: '87K' },
    ]
  };

 
  const calendarEvents = [
    { date: '2023-06-01', events: ['Football: League Final'] },
    { date: '2023-06-05', events: ['Tennis: French Open'] },
    { date: '2023-06-10', events: ['Football: Champions League'] },
  ];

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className={styles.container}>
     
      <nav className={styles.navbar}>
        <div className={styles.logo}>SPORTSTREAM</div>
        <div className={styles.navLinks}>
          <button className={styles.navButton}>
            <FaSearch /> <span>Search</span>
          </button>
          <button className={styles.navButton}>
            <FaEnvelope /> <span>Contact</span>
          </button>
          <button className={styles.navButton}>
            <FaInfoCircle /> <Link href={'/about'} className={styles.navButton} > <span>About</span></Link>
          </button>
          <Link href={`/signup`} className={styles.signUpButton}>
            <span>Sign Up</span>
          </Link>
          <Link href={`/signin`} className={styles.signInButton}>
            <span>Sign In</span>
          </Link>
        </div>
      </nav>

      <main className={styles.main}>
       
        <div className={styles.sportFilter}>
          <h2 className={styles.sectionTitle}>
            <FaFilter className={styles.icon} /> Sports 
          </h2>
          <div className={styles.sportButtons}>
            <button 
              onClick={() => setSelectedSport('all')}
              className={`${styles.sportButton} ${selectedSport === 'all' ? styles.activeSport : ''}`}
            >
              All Sports
            </button>
            {sports.map(sport => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`${styles.sportButton} ${selectedSport === sport ? styles.activeSport : ''}`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

    
        <div className={styles.tabContainer}>
          <div className={styles.tabs}>
            {['live', 'today', 'upcoming', 'history'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
              >
                {tab === 'live' && <><FaPlay /> Currently Streaming</>}
                {tab === 'today' && <><FaCalendarDay /> Today's Schedule</>}
                {tab === 'upcoming' && <><FaCalendarAlt /> Upcoming Events</>}
                {tab === 'history' && <><FaHistory /> Match History</>}
              </button>
            ))}
          </div>
        </div>

     
        <div className={styles.contentGrid}>
      
          <div className={styles.mainContent}>
       
            {activeTab === 'live' && (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>
                  <FaPlay className={styles.sectionIcon} /> Now Streaming
                </h2>
                <div className={styles.streamGrid}>
                  {nowStreaming
                    .filter(stream => selectedSport === 'all' || stream.sport === selectedSport)
                    .map(stream => (
                      <Link 
                        key={stream.id} 
                        href={`/stream/${stream.id}`}
                        className={styles.streamCardLink}
                      >
                        <div className={styles.streamCard}>
                          <div className={styles.streamThumbnail}>
                            <img 
                              src={stream.image} 
                              alt={stream.title} 
                              className={styles.thumbnailImage}
                            />
                            <div className={styles.liveBadge}>LIVE</div>
                            <FaPlay size={40} className={styles.playIcon} />
                          </div>
                          <div className={styles.streamInfo}>
                            <h3 className={styles.streamTitle}>{stream.title}</h3>
                            <div className={styles.streamMeta}>
                              <span>{stream.sport}</span>
                              <span className={styles.viewers}>
                                <FaEye className={styles.viewerIcon} /> {stream.viewers}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </section>
            )}

          
            {activeTab === 'today' && (
              <>
                <section className={styles.section}>
                  <h2 className={styles.sectionHeading}>
                    <FaClock className={styles.sectionIcon} /> Currently On
                  </h2>
                  <div className={styles.todayStreams}>
                    {currentStreams
                      .filter(stream => selectedSport === 'all' || stream.sport === selectedSport)
                      .map(stream => (
                        <div key={stream.id} className={styles.todayStreamCard}>
                          <div>
                            <h3 className={styles.streamTitle}>{stream.title}</h3>
                            <p className={styles.sportName}>{stream.sport}</p>
                          </div>
                          <div className={styles.timeContainer}>
                            <span className={styles.timeBadge}>{stream.time}</span>
                            <Link href={`/stream/${stream.id}`} className={styles.arrowButton}>
                              <FaChevronRight />
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionHeading}>
                    <FaHistory className={styles.sectionIcon} /> Earlier Today
                  </h2>
                  <div className={styles.todayStreams}>
                    {earlierTodayStreams
                      .filter(stream => selectedSport === 'all' || stream.sport === selectedSport)
                      .map(stream => (
                        <div key={stream.id} className={styles.todayStreamCard}>
                          <div>
                            <h3 className={styles.streamTitle}>{stream.title}</h3>
                            <p className={styles.sportName}>{stream.sport}</p>
                          </div>
                          <div className={styles.timeContainer}>
                            <span className={styles.timeBadge}>{stream.time}</span>
                            <button className={styles.arrowButton}>
                              <FaChevronRight />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>
              </>
            )}

        
            {activeTab === 'upcoming' && (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>
                  <FaCalendarAlt className={styles.sectionIcon} /> Upcoming Events
                </h2>
                <div className={styles.upcomingGrid}>
                  {upcomingEvents
                    .filter(event => selectedSport === 'all' || event.sport === selectedSport)
                    .map(event => (
                      <div key={event.id} className={styles.upcomingCard}>
                        <div className={styles.upcomingHeader}>
                          <div>
                            <h3 className={styles.streamTitle}>{event.title}</h3>
                            <p className={styles.sportName}>{event.sport}</p>
                          </div>
                          <div className={styles.dateBadge}>
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        <button className={styles.reminderButton}>
                          Set Reminder
                        </button>
                      </div>
                    ))}
                </div>

            
                <h2 className={styles.sectionHeading} style={{ marginTop: '2rem' }}>
                  <FaCalendarAlt className={styles.sectionIcon} /> Calendar View
                </h2>
                <div className={styles.calendarView}>
                  {calendarEvents.map((day, index) => (
                    <div key={index} className={styles.calendarDay}>
                      <div className={styles.calendarDate}>
                        {new Date(day.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className={styles.calendarEvents}>
                        {day.events.map((event, i) => (
                          <div key={i} className={styles.calendarEvent}>
                            {event}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

     
            {activeTab === 'history' && (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>
                  <FaHistory className={styles.sectionIcon} /> Match History
                  <button 
                    onClick={toggleSortDirection} 
                    className={styles.sortButton}
                  >
                    {sortDirection === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
                  </button>
                </h2>
                <div className={styles.historyList}>
                  {[...matchHistory]
                    .sort((a, b) => {
                      const dateA = new Date(a.date).getTime();
                      const dateB = new Date(b.date).getTime();
                      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
                    })
                    .filter(match => selectedSport === 'all' || 
                      match.title.toLowerCase().includes(selectedSport.toLowerCase()))
                    .map(match => (
                      <div key={match.id} className={styles.historyItem}>
                        <div className={styles.historyMain}>
                          <h3 className={styles.historyTitle}>{match.title}</h3>
                          <div className={styles.historyDate}>
                            {new Date(match.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        <div className={styles.historyResult}>
                          {match.result}
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            )}
          </div>

      
          <div className={styles.sidebar}>
       
            <section className={styles.featuredSection}>
              <h2 className={styles.featuredHeading}>
                <FaFire className={styles.featuredIcon} /> Trending Events
              </h2>
              <div className={styles.featuredList}>
                {featuredContent.trending.map(item => (
                  <div key={item.id} className={styles.featuredItem}>
                    <span className={styles.featuredTitle}>{item.title}</span>
                    <span className={styles.featuredMeta}>
                      <FaEye className={styles.viewerIcon} /> {item.viewers}
                    </span>
                  </div>
                ))}
              </div>
            </section>


            <section className={styles.featuredSection}>
              <h2 className={styles.featuredHeading}>
                <FaEye className={styles.featuredIcon} /> Most Watched
              </h2>
              <div className={styles.featuredList}>
                {featuredContent.mostWatched.map(item => (
                  <div key={item.id} className={styles.featuredItem}>
                    <span className={styles.featuredTitle}>{item.title}</span>
                    <span className={styles.featuredMeta}>
                      <FaEye className={styles.viewerIcon} /> {item.viewers}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.featuredSection}>
              <h2 className={styles.featuredHeading}>
                <FaUsers className={styles.featuredIcon} /> Most Subscribed
              </h2>
              <div className={styles.featuredList}>
                {featuredContent.mostSubscribed.map(item => (
                  <div key={item.id} className={styles.featuredItem}>
                    <span className={styles.featuredTitle}>{item.title}</span>
                    <span className={styles.featuredMeta}>
                      {item.subscribers} subs
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
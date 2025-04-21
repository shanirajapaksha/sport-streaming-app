'use client';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaHeart, FaShare, FaEllipsisH, FaRegCommentDots } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import styles from './stream.module.css';

export default function LiveStreamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const streamData = {
    id: id,
    title: 'Premier League: Arsenal vs Chelsea',
    viewers: '124K',
    category: 'Football',
    isLive: true,
    relatedMatches: [
      { id: '2', title: 'Manchester United vs Liverpool', time: 'Tomorrow, 20:00' },
      { id: '3', title: 'Barcelona vs Real Madrid', time: 'Saturday, 21:45' },
    ]
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  const toggleLike = () => setIsLiked(!isLiked);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.contentGrid}>
        
        {/* Left Column */}
        <div className={styles.videoColumn}>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.youtubeIframe}
              src="https://www.youtube.com/embed/mpgr0cdW3VE?autoplay=1&mute=1&rel=0"
              title="Premier League: Arsenal vs Chelsea"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className={styles.videoControls}>
              <div className={styles.controlsInner}>
                <div className={styles.controlButtons}>
                  <button onClick={togglePlay} className={styles.playPauseButton}>
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                  </button>
                  <button onClick={toggleMute} className={styles.muteButton}>
                    {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                  </button>
                </div>
                <div className={styles.viewersInfo}>
                  <span className={styles.liveLabel}>LIVE</span>
                  <span className={styles.viewersCount}>{streamData.viewers} watching</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.streamInfo}>
            <h1 className={styles.streamTitle}>{streamData.title}</h1>
            <p className={styles.category}>{streamData.category}</p>
            <div className={styles.actionButtons}>
              <button onClick={toggleLike} className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}>
                <FaHeart /> Like
              </button>
              <button className={styles.shareButton}><FaShare /> Share</button>
              <button className={styles.moreButton}><FaEllipsisH /></button>
            </div>
          </div>
        </div>

       
        <div className={styles.chatColumn}>
          <div className={styles.subscribeCard}>
            <h2 className={styles.cardTitle}>SUBSCRIBE</h2>
            <p className={styles.cardDescription}>Get access to all live matches</p>
            <button className={styles.subscribeButton}>SUBSCRIBE NOW</button>
          </div>

          <div className={styles.chatSection}>
            <h2 className={styles.cardTitle}>CHAT</h2>
            <div className={styles.chatMessages}>
              {comments.length > 0 ? (
                comments.map((msg, i) => (
                  <div key={i} className={styles.chatMessage}>
                    <span className={styles.chatUser}>User{i + 1}:</span> {msg}
                  </div>
                ))
              ) : (
                <p className={styles.noComments}>No comments yet. Be the first to chat!</p>
              )}
            </div>
            <form onSubmit={handleCommentSubmit} className={styles.chatInputForm}>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className={styles.chatInput}
              />
              <button type="submit" className={styles.chatSubmitButton}><FaRegCommentDots /></button>
            </form>
          </div>

          <div className={styles.relatedMatches}>
            <h2 className={styles.cardTitle}>RELATED MATCHES</h2>
            <div className={styles.relatedMatchList}>
              {streamData.relatedMatches.map(match => (
                <div
                  key={match.id}
                  onClick={() => router.push(`/stream/${match.id}`)}
                  className={styles.relatedMatchItem}
                >
                  <p className={styles.matchTitle}>{match.title}</p>
                  <p className={styles.matchTime}>{match.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

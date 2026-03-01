import React, { useRef ,useState } from 'react';
import './App.css';
import Rose3D from './components/Rose3D';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import Game from './components/Game';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import FallingHearts from './components/FallingHearts';
import WelcomeLetter from './components/WelcomeLetter';



function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showLetter, setShowLetter] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

const toggleMusic = () => {
  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Ошибка воспроизведения:", e));
    }
    setIsPlaying(!isPlaying);
  }
};

  const handleGameComplete = () => {
    setCompleted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };
  

  return (
  <div className="app">

   <audio
  ref={audioRef}
  loop
  style={{ display: 'none' }}
>
  <source src="music.mp3" type="audio/mpeg" />
  Ваш браузер не поддерживает аудио.
</audio>

    {/* Кнопка управления (в правом верхнем углу) */}
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleMusic}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 10000,
        background: isPlaying ? '#ff1493' : 'rgba(255, 105, 180, 0.6)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        fontSize: '1.8rem',
        cursor: 'pointer',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isPlaying ? '🔇' : '🎵'}
    </motion.button>

    {showLetter ? (
      // Показываем письмо, если showLetter = true
      <WelcomeLetter onClose={() => setShowLetter(false)} />
    ) : (
     
      <>
        <FallingHearts />

        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Вечная Роза для моей любимой 🌹</h1>
          <p>My Love, это твой личный сад любви. Исследуй!</p>
        </motion.header>

        <section className="rose-section">
          <Rose3D />
        </section>

        <section className="gallery-section">
          <Gallery />
        </section>

        <section className="messages-section">
          <Messages />
        </section>

        <section className="game-section">
          {!completed ? (
            <Game onComplete={handleGameComplete} />
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
              <h2>Ты собрала все лепестки! ❤️</h2>
              <p>С 8 марта, моя самая любимая!
                Ты — самое лучшее, что произошло в моей жизни.
                Иногда я веду себя как дурак, часто не слышал тебя так, как нужно… но знай: я люблю тебя всегда.
                Даже когда мы ссоримся, ты остаёшься моей единственной и неповторимой.
              </p>
            </motion.div>
          )}
        </section>

        {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}
      </>
    )}
  </div>
);
}

export default App;
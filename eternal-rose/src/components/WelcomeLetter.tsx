import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeLetterProps {
  onClose: () => void;
}

const WelcomeLetter: React.FC<WelcomeLetterProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Через 3 секунды можно автоматически закрыть весь оверлей, если хочешь
    // setTimeout(onClose, 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          position: 'relative',
          perspective: '1200px', // для 3D-эффекта
        }}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            // Закрытый конверт
            <motion.div
              key="envelope-closed"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: -30 }}
              transition={{ duration: 0.8, type: 'spring' }}
              style={{
                background: 'linear-gradient(135deg, #ffccd5, #ffb6c1)',
                borderRadius: '20px 20px 100px 100px',
                padding: 'clamp(40px, 8vw, 80px) clamp(30px, 6vw, 60px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 10px 30px rgba(255,255,255,0.6)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Клапан конверта */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to bottom, #ff99ac, #ff6690)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transformOrigin: 'top',
                  zIndex: 2,
                }}
              />

              {/* Сердечко на клапане */}
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: 'clamp(60px, 5vw, 120px)',
                  zIndex: 3,
                  textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                }}
              >
                💌
              </div>

              <h2
                style={{
                  color: '#fff',
                  fontSize: 'clamp(2rem, 6vw, 3rem)',
                  margin: '60px 0 20px',
                  textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
                  zIndex: 2,
                  position: 'relative',
                }}
              >
                От меня для тебя ❤️
              </h2>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleOpen}
                style={{
                  background: 'white',
                  color: '#ff1493',
                  border: 'none',
                  padding: 'clamp(14px, 4vw, 18px) clamp(40px, 10vw, 60px)',
                  fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  marginTop: '30px',
                  fontWeight: 'bold',
                }}
              >
                Открыть письмо
              </motion.button>
            </motion.div>
          ) : (
            // Открытое письмо
            <motion.div
              key="letter-open"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -30, opacity: 0 }}
              transition={{ duration: 1.2, type: 'spring', stiffness: 80 }}
              style={{
                background: 'linear-gradient(135deg, #fffaf5 0%, #ffeef2 100%)',
                borderRadius: '28px',
                padding: 'clamp(40px, 6vw, 60px)',
                boxShadow: '0 20px 80px rgba(255,105,180,0.45)',
                position: 'relative',
                textAlign: 'center',
                border: '2px solid rgba(255,182,193,0.7)',
                transformStyle: 'preserve-3d',
                maxHeight: '85vh',
                overflowY: 'auto',
              }}
            >
              <h1
                style={{
                  color: '#c71585',
                  fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
                  marginBottom: '30px',
                  fontFamily: 'Georgia, serif',
                }}
              >
                Моя самая любимая JANE ❤️
              </h1>

              <div
                style={{
                  fontSize: 'clamp(1.1rem, 3.5vw, 1.45rem)',
                  lineHeight: 1.9,
                  color: '#333',
                  marginBottom: '40px',
                  fontStyle: 'italic',
                  whiteSpace: 'pre-wrap',
                }}
              >
                Привет, солнышко…{'\n\n'}
                Я долго думал, как сказать тебе всё, что у меня на душе.{'\n'}
                Поэтому написал это письмо — просто для тебя.{'\n\n'}
                Здесь собраны наши воспоминания, мои чувства и маленький сюрприз.{'\n'}
                Открой его, когда будешь готова улыбнуться… или заплакать от счастья 😊{'\n\n'}
                С любовью, которая не кончается никогда,{'\n'}
                твой BOY 🌹
              </div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                onClick={onClose}
                style={{
                  background: 'linear-gradient(45deg, #ff69b4, #ff1493)',
                  color: 'white',
                  border: 'none',
                  padding: 'clamp(14px, 4vw, 18px) clamp(40px, 10vw, 60px)',
                  fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(255,105,180,0.5)',
                  minWidth: '220px',
                }}
              >
                Начать волшебство 💕
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WelcomeLetter;
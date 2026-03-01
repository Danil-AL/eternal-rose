import React, { useState } from 'react';

interface GameProps {
  onComplete: () => void;
}

function Game({ onComplete }: GameProps) {
  const [petals, setPetals] = useState(0);

  const collect = () => {
    const newCount = petals + 1;
    setPetals(newCount);
    if (newCount >= 5) onComplete();
  };

  return (
    <div>
      <h2>Собери 5 лепестков розы!</h2>
      <p>Собрано: {petals} / 5</p>
      <button 
        onClick={collect}
        style={{
          background: '#ff1493',
          color: 'white',
          border: 'none',
          padding: '15px 40px',
          fontSize: '1.3rem',
          borderRadius: '50px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Собрать лепесток 🌹
      </button>
    </div>
  );
}

export default Game;
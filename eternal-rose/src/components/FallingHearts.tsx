import React, { useEffect } from 'react';

const FallingHearts = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerText = Math.random() > 0.5 ? '❤️' : '💖';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
      heart.style.animationDuration = (Math.random() * 12 + 8) + 's';
      heart.style.opacity = (Math.random() * 0.7 + 0.3).toString();

      document.body.appendChild(heart); 

      setTimeout(() => heart.remove(), 20000);
    };

    const interval = setInterval(createHeart, 500); // каждые 0.5 сек новое

    // 10 штук сразу
    for (let i = 0; i < 10; i++) createHeart();

    return () => clearInterval(interval);
  }, []);

  return null; 
};

export default FallingHearts;
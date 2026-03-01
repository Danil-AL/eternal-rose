import React, { useState } from 'react';
import { motion } from 'framer-motion';

const messages = [
  'Ты — моё самое большое счастье 💕',
  'Помнишь, как мы встретились... 😊',
  'С тобой каждый день — как праздник',
  'Люблю тебя бесконечно ❤️',
  // добавь свои
];

function Messages() {
  const [open, setOpen] = useState<number[]>([]);

  return (
    <div>
      <h2>Секретные послания для тебя</h2>
      {messages.map((msg, idx) => (
        <div key={idx}>
          <motion.button
            onClick={() => setOpen(prev => 
              prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
            )}
            whileHover={{ scale: 1.05 }}
            style={{
              background: '#ff69b4',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              margin: '10px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '1.1rem'
            }}
          >
            Открыть сообщение #{idx + 1}
          </motion.button>
          {open.includes(idx) && <p style={{ fontStyle: 'italic', margin: '10px 0' }}>{msg}</p>}
        </div>
      ))}
    </div>
  );
}

export default Messages;
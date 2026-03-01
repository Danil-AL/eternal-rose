import React from 'react';
import { motion } from 'framer-motion';

const memories = [
  { src: 'https://sun9-1.userapi.com/s/v1/ig2/jHEhepXaRpzXU1xhniuhGMHqOqTVPT7YcUXV03pz-VyIIv6_4uD8cEtHO2AnlWWzzp9si8lz_knv3cnFe9kqxbAW.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,960x1280&from=bu&cs=960x0', text: 'Наше прекрасное лето 💕', date: '20 июня 2025' },
  { src: 'https://sun9-39.userapi.com/s/v1/ig2/f3bjInzlaonIj1ociqww26NblP0GM6nWWb652NFQNPFc8hyczmaVlObVac4YFbqG_AndeG9GDMpM7Gxwvidon5me.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640&from=bu&cs=480x0', text: 'Моя первая поездка к самой замечательной девушке 🚗❤️', date: 'Новый год 2025' },
  { src: 'https://sun9-64.userapi.com/s/v1/ig2/b2AWXPfUhnTPTb2Duu3Y2wUCd7iDQ5C6PtcN7xpjsCElx1-k_l65ICbZhPy-7sHVJm5WLmAL3oM1Ww-rw_QUeZKm.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540&from=bu&cs=540x0', text: 'Просто ты и я, и весь мир подождёт 😘', date: 'Лето 2025' },
  { src: 'https://sun9-28.userapi.com/s/v1/ig2/HGQwRoN1ug16-AyLcCWzuFEqh74bcPjAEDl_7aLwnCdpIiwa_4wVVcnqOzDzMEjwAwjb_zK4Q3jmlC7OS3M3aW1_.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640&from=bu&cs=480x0', text: 'Тот самый день, когда всё началось 💕', date: '19 августа 2024' },
  { src: 'https://sun9-74.userapi.com/s/v1/ig2/AvGkzZQkMauNW6yZvFhk4LzMpWCJ3qiQ_JkqTNBxB5OfgHKO48A16mRsSVhB2zlDp5v9Wh8uJSw_4vO6VYAh-fj_.jpg?quality=95&as=32x48,48x71,72x107,108x160,160x238,240x356,360x535,431x640&from=bu&cs=431x0', text: 'Тот самый день, когда всё началось 💕', date: '20 августа 2024' },
  { src: 'https://sun9-7.userapi.com/s/v1/ig2/oCB-uqpX45QK7_SU-4Kgm0GNynrw8_49nB2DSB-RoU2tinXdplhaOmQipd6KiuiGD90v9iPYrdDRZ_d2o6kFQWxh.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640&from=bu&cs=480x0', text: 'Тот самый день, когда всё началось 💕', date: '20 августа 2024' },
  { src: 'https://sun9-87.userapi.com/s/v1/ig2/CmfrNWjoiRxDTzfnDHJDhfXX5AVui0MkUottylGbcGS6UxJPTrt2qkr22u1iN6x7vMAZlDXBAjivK3yJkgg1B_lW.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280&from=bu&cs=720x0', text: 'Первая поездка к тебе с самими яркими эмоциями, благодаря тебе 💕', date: '28 декабря 2024' },
  { src: 'https://sun9-36.userapi.com/s/v1/ig2/rFzR0X-xTY0oiYgRCZdRzyliS5PuIqGpoPphxMquwIGdmpPqElLKfAMSSVfW9gIvWnr5vLyr3ecnOhARbIq9ed_B.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0', text: 'Наша вторая встреча 💕', date: '3 января 2025' },
  { src: 'https://sun9-17.userapi.com/s/v1/ig2/FRoIS7K3P4-h-blL_3S-z5RNqkaiSPwdOyKTEZ55_-8kpftfT7KPL2hxOsniGceZ72VBOke_2OHa4hmdEklfmWRz.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x214,240x320,360x480,480x641,540x721,640x854,720x961,959x1280&from=bu&cs=959x0', text: 'Наш поход в клуб при 2 встрече 💕', date: '2 января 2025' },
];

function Gallery() {
  return (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
    <h2>Наши воспоминания 📸</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' }}>
      {memories.map((item, idx) => (
        <div key={idx} style={{ textAlign: 'center', maxWidth: '260px' }}>
          <motion.img
            src={item.src}
            alt={item.text}
            style={{
              width: '100%',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
              objectFit: 'cover',
              aspectRatio: '3/4',
            }}
            whileHover={{ scale: 1.06 }}
          />
          <p style={{ margin: '12px 0 4px', fontWeight: 'bold', color: '#c71585' }}>{item.text}</p>
          <small style={{ color: '#555' }}>{item.date}</small>
        </div>
      ))}
    </div>
  </motion.div>
);
}

export default Gallery;
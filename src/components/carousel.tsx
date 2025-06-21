'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import advanced from '@/assets/pics/25_team_advanced.jpg';
import beginner from '@/assets/pics/25_team_beginner.jpg';
import dev from '@/assets/pics/25_dev_beginner.jpg';

const slides = [
    {
        src: advanced,
        title: '2025 CyberCup Advanced Team',
        description: 'Placed 2nd in Commonwealth CyberCup!<br />Team: George Fillipov, Carrie Chia, Ari Ratliff, Elvin Duong, Dinh Tran, Timothy Wah'
    },
    {
        src: beginner,
        title: '2025 CyberCup Beginner Team',
        description: 'Placed 3rd in the Commonwealth CyberCup!<br />Team: Dev Nandan Suraj, Santhosh Karthik, Kelden Galhouse, Gabe Amare'
    },
    {
        src: dev,
        title: '2025 CyberCup Beginner Team Spotlight',
        description: 'Dev Suraj - 3rd highest scorer in beginner division!'
    }
];

export default function CarouselComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-12 py-6">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Image
              src={slides[index].src}
              alt={slides[index].title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />

            <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-sm text-white px-6 py-4">
              <h3 className="text-xl font-semibold">{slides[index].title}</h3>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: slides[index].description }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

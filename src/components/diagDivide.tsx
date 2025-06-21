'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface DiagonalDividerProps {
  flip?: boolean;
}

export default function DiagonalDivider({ flip }: DiagonalDividerProps) {
  return (
    <div
      className={clsx('relative h-24 w-full overflow-hidden', flip && 'rotate-180')}
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[120%] h-full"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="softShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.99" />
              <stop offset="100%" stopColor="#f7f7f7" stopOpacity="0.99" />
            </linearGradient>
          </defs>
          <polygon points="0,100 100,0 100,100" fill="url(#softShadow)" />
        </svg>
      </motion.div>
    </div>
  );
}


/*'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface DiagonalDividerProps {
  flip?: boolean;
}

export default function DiagonalDivider({ flip }: DiagonalDividerProps) {
  return (
    <div className={clsx('relative h-24 w-full overflow-hidden', flip && 'rotate-180')}
      aria-hidden>
      <motion.svg
        initial={{ x: '-10%' }}
        whileInView={{ x: '10%' }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.1 }}
        className="absolute left-1/2 -translate-x-1/2 w-[120%] h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0e0e0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <polygon points="0,100 100,0 100,100" fill="url(#dividerGradient)" />
      </motion.svg>
    </div>
  );
}*/
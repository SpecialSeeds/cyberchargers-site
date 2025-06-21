'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

import thing1 from '@/assets/pfp/thing1.png';
import thing2 from '@/assets/pfp/thing2.png';
import thing3 from '@/assets/pfp/thing3.png';

const leaders = [
  {
    name: 'carrie',
    title: 'President',
    img: thing1,
    about: 'carrie leads our team and organizes meetings, guiding both newcomers and experienced members alike.'
  },
  {
    name: 'elvin',
    title: 'Marketing Vice President',
    img: thing2,
    about: 'elvin focuses on outreach, recruiting new members and coordinating with other clubs and events.'
  },
  {
    name: 'chien',
    title: 'Operations Vice President',
    img: thing3,
    about: 'chien handles logistics, scheduling, and helping plan weekly sessions and CTF prep.'
  },
  {
    name: 'ray',
    title: 'Linux Captain',
    img: thing1,
    about: 'ray specializes in all flavors of linux... any questions? ask him!'
  },
  {
    name: 'tim',
    title: 'Windows Captain',
    img: thing2,
    about: 'tim takes care of windows and windows server hardening... any questions? ask him!'
  },
  {
    name: 'aryan',
    title: 'Cisco Captain',
    img: thing3,
    about: 'aryan knows plenty about networking and packet tracer challenges... any questions? ask him!'
  }
];

export default function LeadershipSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-4 sm:px-6 py-16 bg-gray-100 dark:bg-[#111] text-center">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="text-2xl sm:text-3xl font-bold dark:text-gray-300 hover:underline flex items-center gap-2 justify-center mx-auto"
      >
        Leadership {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden mt-10"
          >
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {leaders.slice(0, 3).map(({ name, title, img, about }) => (
                <div key={name} className="space-y-2">
                  <Image src={img} alt={title} width={300} height={300} className="rounded-xl mx-auto" />
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-purple-500 font-medium">{title}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{about}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6">Team Captains</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {leaders.slice(3).map(({ name, title, img, about }) => (
                <div key={name} className="space-y-2">
                  <Image src={img} alt={title} width={300} height={300} className="rounded-xl mx-auto" />
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-purple-500 font-medium">{title}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{about}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

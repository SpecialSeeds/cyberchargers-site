'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';

export default function HeaderBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] transition-colors">
      <div className="flex items-center space-x-6">
        <Link href="/" className = "text-2xl font-bold hover:text-purple-600 dark:hover:text-purple-400 transition">CyberChargers</Link>
        <nav className="flex space-x-4 text-sm">
          <Link href="/about" className="hover:text-purple-600 dark:hover:text-purple-400">About</Link>
          <Link href="/writeups" className="hover:text-purple-600 dark:hover:text-purple-400">Learn</Link>
          {/*
          <Link href="/connect" className="hover:text-purple-600 dark:hover:text-purple-400">Connect</Link>
          */}
        </nav>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}
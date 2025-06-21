'use client';

import DiagonalDivider from "@/components/diagDivide";
import HeaderBar from "@/components/header";
import FooterBar from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100 transition-colors duration-300">
      <HeaderBar />

      <section className="px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Chantilly CyberChargers</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
          Chantilly High School&apos;s competitive CTF team. We train together, compete nationally, and learn skills in reverse engineering, cryptography, web exploitation, and forensics.
        </p>
        <a
          href="https://ctftime.org/team/271007"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-purple-600 rounded hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400 transition"
        >
          View us on CTFtime
        </a>
      </section>

      <DiagonalDivider />

      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gray-100 dark:bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#9c27ff]">Weekly Meetings</h3>
          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300">
            We meet weekly after school for all things Cybersecurity. AFA CyberPatriot competition, CTFs, and more!
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 italic">
            No experience needed.
          </p>
        </div>
      </section>

      <DiagonalDivider flip />

      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#9c27ff]">What We Do</h3>
          <ul className="text-left text-gray-800 dark:text-gray-300 space-y-3 max-w-xl mx-auto list-disc list-inside text-sm sm:text-base">
            <li>Compete in CTFs (picoCTF, Commonwealth Cyber Cup, TJCTF)</li>
            <li>Host internal training events and practice CTFs</li>
            <li>Write technical blogs and challenge writeups</li>
            <li>Explore modern exploits and security tools</li>
          </ul>
        </div>
      </section>

      <DiagonalDivider />

      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gray-100 dark:bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#9c27ff]">Join CyberChargers</h3>
          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300">
            All students at Chantilly are welcome. Join our next meeting or email a club officer to get started. Whether you&apos;re a beginner or advanced, there is always a challenge waiting.
          </p>
        </div>
      </section>

      <DiagonalDivider flip />
      <FooterBar />
    </main>
  );
}

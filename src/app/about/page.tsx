'use client';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();
  return (
    <main className="bg-black min-h-screen px-6 py-12 text-white">
      <button
        onClick={() => router.back()}
        className="text-[#9c27ff] hover:text-white transition text-sm">
        ← Back
      </button>

      
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Section: Heading & Intro */}
        <section>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#9c27ff] tracking-tight mb-4">
            About CyberChargers
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            We are the Chantilly High School CTF team passionate about solving cybersecurity challenges, 
            learning new exploitation techniques, and writing detailed walkthroughs. Whether it&apos;s binary exploitation, 
            web hacking, forensics, or crypto — we&apos;re here to capture flags and level up together.
          </p>
        </section>

        {/* Section: Team Image */}
        <section className="rounded-lg overflow-hidden border border-[#9c27ff]">
          <img
            src="/images/team-photo.jpg"
            alt="CyberChargers team"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Section: What We Do */}
        <section>
          <h2 className="text-2xl font-bold text-[#9c27ff] mb-4">What We Do</h2>
          <p className="text-md text-gray-300 leading-relaxed">
            We compete in online and in-person Capture The Flag competitions, train in vulnerability research and offensive security techniques, 
            and develop our own scripts and automation tools. We write public walkthroughs to help others learn along with us.
          </p>
        </section>

        {/* Section: Split Image + Challenge Mindset */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/images/challenge-screenshot.png"
            alt="Solving a challenge"
            className="w-full md:w-1/2 rounded-lg border border-[#9c27ff]"
          />
          <div className="text-gray-300 text-md md:w-1/2">
            <h3 className="text-xl font-semibold text-[#9c27ff] mb-2">Challenge Mentality</h3>
            <p>
              Every CTF challenge teaches us something new. We do&apos;t just solve — we break down what happened, why it worked, and how to do it better next time.
            </p>
          </div>
        </section>

        {/* 🏆 Section: Competitions & Awards */}
        <section>
          <h2 className="text-2xl font-bold text-[#9c27ff] mb-4">Competitions & Awards</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 text-md">
            <li><strong>temp:   </strong>temp</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

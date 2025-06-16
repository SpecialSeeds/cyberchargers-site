'use client';

import Image from 'next/image';
import Link from 'next/link';
import thing1 from '@/assets/pfp/thing1.png';
import thing2 from '@/assets/pfp/thing2.png';
import thing3 from '@/assets/pfp/thing3.png';
import HeaderBar from '@/components/header';
import DiagonalDivider from '@/components/diagDivide';
import FooterBar from '@/components/footer';

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100 transition-colors duration-300">
        <HeaderBar />

        <section className="px-6 py-20 text-center">
            <h1 className="text-4xl font-bold mb-8">Connect With Us</h1>
            <div className="max-w-3xl mx-auto space-y-4">
                <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:chantillyctf@gmail.com" className="text-purple-600 hover:underline">
                    chantillyctf@gmail.com
                    </a>
                </p>
                <p>
                    <strong>Instagram:</strong>{' '}
                    <a
                    href="https://instagram.com/cyberchargers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                    >
                    @cyberchargers
                    </a>
                </p>
                <p>
                    <strong>CTFtime:</strong>{' '}
                    <a
                    href="https://ctftime.org/team/389051"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                    >
                    CyberChargers on CTFtime
                </a>
                </p>
                <p>
                    <strong>Discord:</strong> Ask a member to join our Discord!
                </p>
            </div>
        </section>

        <DiagonalDivider />

        <section className="px-6 py-20 bg-gray-100 dark:bg-[#111] text-center">
            <h2 className="text-3xl font-bold mb-12">Leadership</h2>

            {/* President and Co-VP */}
            <div className="grid md:grid-cols-3 gap-10 items-start mb-20">
            <div className="space-y-2">
                <Image src={thing1} alt="President" width={300} height={300} className="rounded-xl mx-auto" />
                <h3 className="text-xl font-bold">carrie</h3>
                <p className="text-purple-500 font-medium">President</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                carrie leads our team and organizes meetings, guiding both newcomers and experienced members alike.
                </p>
            </div>
            <div className="space-y-2">
                <Image src={thing2} alt="Marketing VP" width={300} height={300} className="rounded-xl mx-auto" />
                <h3 className="text-xl font-bold">elvin</h3>
                <p className="text-purple-500 font-medium">Marketing Vice President</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                elvin focuses on outreach, recruiting new members and coordinating with other clubs and events.
                </p>
            </div>
            <div className="space-y-2">
                <Image src={thing3} alt="Operations VP" width={300} height={300} className="rounded-xl mx-auto" />
                <h3 className="text-xl font-bold">chien</h3>
                <p className="text-purple-500 font-medium">Operations Vice President</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                chien handles logistics, scheduling, and helping plan weekly sessions and CTF prep.
                </p>
            </div>
            </div>

            <h3 className="text-2xl font-semibold mb-10">Team Captains</h3>
            <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-2">
                <Image src={thing1} alt="Linux Captain" width={300} height={300} className="rounded-xl mx-auto" />
                <h3 className="text-xl font-bold">ray</h3>
                <p className="text-purple-500 font-medium">Linux Captain</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                ray specializes in all flavors of linux... any questions? ask him!
                </p>
            </div>
            <div className="space-y-2">
                <Image src={thing2} alt="Windows Captain" width={300} height={300} className="rounded-xl mx-auto" />
                <h3 className="text-xl font-bold">tim</h3>
                <p className="text-purple-500 font-medium">Windows Captain</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                tim takes care of windows and windows server hardening... any questions? ask him!
                </p>
            </div>
            <div className="space-y-2">
                <Image src={thing3} alt="Cisco Captain" width={300} height={300} className="rounded-xl mx-auto" />
                <h3 className="text-xl font-bold">aryan</h3>
                <p className="text-purple-500 font-medium">Cisco Captain</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                aryan knows plenty about networking and packet tracer challenges... any questions? ask him!
                </p>
            </div>
            </div>
            </section>

        <DiagonalDivider flip />

        <FooterBar />
    </main>
  );
}
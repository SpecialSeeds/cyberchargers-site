'use client';

import HeaderBar from '@/components/header';
import DiagonalDivider from '@/components/diagDivide';
import FooterBar from '@/components/footer';
import LeadershipSection from '@/components/leadership';

export default function ConnectPage() {
return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100 transition-colors duration-300">
    <HeaderBar />

    <section className="px-4 sm:px-6 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Connect With Us</h1>
        <div className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg">
        <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:chantillyhighcyberpatriot@gmail.com" className="text-purple-600 hover:underline">
            chantillyhighcyberpatriot@gmail.com
            </a>
        </p>
        <p>
            <strong>Instagram:</strong>{' '}
            <a
            href="https://www.instagram.com/chs.cyberpatriot/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
            >
            @chs.cyberpatriot
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

    <LeadershipSection/>

    <DiagonalDivider flip />

    <FooterBar />
    </main>
);
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white">
      <h1 className="text-5xl font-bold text-[#9c27ff] tracking-tight drop-shadow-[0_0_4px_#9c27ff]">CyberChargers</h1>
      <p className="text-lg mt-4 text-purple-300">Chantilly High School CTF Team</p>
      <p className="mt-4 text-xl text-gray-300">
        capture, crack, claim the flag. </p>
      <div className="mt-6 space-x-4">
        <a
          href="/about"
          className="inline-block mt-6 px-5 py-2 bg-[#9c27ff] hover:bg-[#b84dff] text-white rounded-md transition duration-150"
        >
          About Us
        </a>
        <a
          href="/writeups"
          className="inline-block mt-6 px-5 py-2 bg-[#9c27ff] hover:bg-[#b84dff] text-white rounded-md transition duration-150"
        >
          Writeups
        </a>
      </div>
    </main>
  );
}

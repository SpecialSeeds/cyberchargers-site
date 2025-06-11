export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white">
      <h1 className="text-5xl font-extrabold text-cyan-400">CyberChargers</h1>
      <p className="mt-4 text-xl text-gray-300">
        capture, crack, claim the flag.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="/about"
          className="inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white font-medium"
        >
          About Us
        </a>
        <a
          href="/writeups"
          className="inline-block px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-md text-white font-medium"
        >
          Writeups
        </a>
      </div>
    </main>
  );
}

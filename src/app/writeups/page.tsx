export default function WriteupsPage() {
  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-cyan-400">CTF Writeups</h1>
      <ul className="mt-6 space-y-4">
        <li>
          <a href="/writeups/chall1" className="text-lg text-cyan-300 hover:underline">
            chall1
          </a>
        </li>
        <li>
          <a href="/writeups/chall2" className="text-lg text-cyan-300 hover:underline">
            chall2
          </a>
        </li>
      </ul>
    </main>
  );
}

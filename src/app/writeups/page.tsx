import Image from "next/image";
import tj from "@/assets/tjctf.png";
import picoImg from "@/assets/picoctf.jpeg"
export default function WriteupsPage() {
  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-cyan-400">CTF Writeups</h1>
      <ul className="mt-6 space-y-4 flex-col">
        <li className="flex bg-blue-700">
          <a
            href="/writeups/chall1"
            className="text-lg text-cyan-300 hover:underline"
          >
            chall1
          </a>
          <Image
            src={tj}
            alt="tjctf"
            width={50}
            height={50}
            className="ml-auto"
          />
        </li>

        <li className="flex bg-red-700">
          <a href="/writeups/chall2" className="text-lg text-cyan-300 hover:underline">
            chall2
          </a>
          <Image
            src={picoImg}
            alt="picoctf"
            width={50}
            height={50}
            className="ml-auto"
          />
        </li>
      </ul>
    </main>
  );
}


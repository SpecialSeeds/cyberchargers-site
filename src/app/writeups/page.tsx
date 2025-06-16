
import Image from "next/image";
export default function WriteupsPage() {
  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-cyan-400">CTF Writeups</h1>
      <ul className="mt-6 space-y-4 flex-col w-1/2">
        <li className="flex bg-[#1f1f1f]">
          <ul className="flex-col space-y-1 ">
            <li><a
              href="/"
              className="text-lg text-cyan-300 hover:underline"
            >
              TJCTF 2025
            </a></li>
            <li>
            <a
              href="/"
              className="text-sm text-cyan-300 hover:underline"
            >
              TJCTF was one of the competitions of all time. definitely a
              shocker
            </a></li>
          </ul>
          <Image
            src="/assets/tjctf.png"
            alt="tjctf"
            width={60}
            height={60}
            className="ml-auto"
          />
        </li>

        <li className="flex bg-[#1f1f1f]">
          <ul className="flex-col space-y-1 ">
            <li><a href="/" className="text-lg text-cyan-300 hover:underline">
              PicoCTF
            </a></li>
            
            <li><a href="/" className="text-sm text-cyan-300 hover:underline">
              checkout my writeups at fiddlyfiddler.gitbook.io!!
            </a></li>
          </ul>
          <Image
            src="assets/picoctf.jpeg"
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


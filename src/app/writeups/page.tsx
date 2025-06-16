import Image from "next/image";
import picoPic from "@/assets/picoctf.jpeg";
import tjPic from "@/assets/tjctf.png";
import Link from "next/link";
export default function WriteupsPage() {
  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-cyan-400">CTF Writeups</h1>
      <ul className="mt-6 space-y-4 flex-col w-1/2">
        <li className="flex bg-[#1f1f1f]">
          <div className="flex flex-col space-y-1 ">
            <Link
              href="/"
              className="text-lg text-cyan-300 hover:underline"
            >
              TJCTF 2025
            </Link>
            
            <Link
              href="/"
              className="text-sm text-cyan-300 hover:underline"
            >
              TJCTF was one of the competitions of all time. definitely a
              shocker
            </Link>
          </div>
          <Image
            src={tjPic}
            alt="tjctf"
            width={75}
            height={75}
            className="ml-auto"
          />
        </li>

        <li className="flex bg-[#1f1f1f]">
          <div className="flex flex-col space-y-1 ">
            <Link href="/" className="text-lg text-cyan-300 hover:underline">
              PicoCTF
            </Link>
            
            <Link href="/" className="text-sm text-cyan-300 hover:underline">
              checkout my writeups at fiddlyfiddler.gitbook.io!!
            </Link>
          </div>
          <Image
            src={picoPic}
            alt="picoctf"
            width={75}
            height={75}
            className="ml-auto"
          />
        </li>
      </ul>
    </main>
  );
}



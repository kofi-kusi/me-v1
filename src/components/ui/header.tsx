'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";
import { FileUser } from "lucide-react";

export default function Header() {
    const pathname = usePathname()
  return (
    <header>
      <div className="flex justify-between items-center">
        <div>
        <h1 className="font-black text-lg" >kofi kusi</h1>
        <p><i>Software Engineer</i></p>
        </div>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
            <Link href="resume.pdf" className="hover:text-primary">
            <div className="flex items-center gap-2 border-2 border-primary-hover rounded-sm px-2 py-[1.5px]">
                <FileUser size={16} />
                Resume
            </div>
            </Link>
          
          </div>
      </div>
      <hr className="my-2"/>
      <nav >
        <ul className="flex gap-6">
          <li>
            <Link href="/" className={`${pathname === "/" ? "active": ""}`}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={`${pathname === "/about" ? "active": ""}`}>About</Link>
          </li>
          <li>
            <Link href="/works" className={`${pathname === "/works" ? "active": ""}`}>Works</Link>
          </li>
          <li>
            <Link href="/writing" className={`${pathname === "/writing" ? "active": ""}`}>Writing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

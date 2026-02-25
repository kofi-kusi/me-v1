'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
    const pathname = usePathname()
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="font-black " >kofi kusi</div>
        <div className="flex gap-2 items-center">
          <ThemeToggle />
          Resume</div>
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

'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
  return (
    <header>
      <div className="flex justify-between items-center">
        <div>Kofi Kusi</div>
        <div>Resume</div>
      </div>
      <hr />
      <nav >
        <ul className="flex gap-4">
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

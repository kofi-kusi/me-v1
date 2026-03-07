"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";
import { FileUser } from "lucide-react";
import SocialIcons from "../social-links";

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div className="flex justify-between">
        <h1 className="font-black text-lg text-primary tracking-wide">
          <Link href="/">kofi kusi</Link>
        </h1>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <Link href="/resume.pdf" className="hover:text-primary-hover">
            <div className="flex items-center gap-2 border border-border rounded-md px-3 py-1 text-sm transition-all duration-300 hover:border-primary hover:shadow-[0_0_12px_rgba(0,85,255,0.2)]">
              <FileUser size={14} />
              Resume
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center my-4">
        <p>
          <i>Software Engineer</i>
        </p>
        <SocialIcons />
      </div>

      <hr className="my-2" />
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${pathname === "/about" ? "active" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className={`${pathname === "/works" ? "active" : ""}`}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/writing"
              className={`${pathname === "/writing" ? "active" : ""}`}
            >
              Writing
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

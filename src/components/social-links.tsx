import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function SocialIcons() {
  const SOCIAL_ICON_SIZE = 16;
  return (
    <ul className="flex gap-8">
      <li className="p-0 sm:p-2">
        <Link
          href="https://x.com/_kofi_kusi"
          target="_blank"
          aria-label="Twitter profile"
          className="twitter-icon flex items-center justify-center transition-all duration-300 hover:rotate-[15deg] hover:text-[#1DA1F2]"
        >
          <Twitter size={SOCIAL_ICON_SIZE} />
        </Link>
      </li>
      <li className="p-0 sm:p-2">
        <Link
          href="https://github.com/kofi-kusi"
          target="_blank"
          aria-label="GitHub profile"
          className="flex items-center justify-center transition-all duration-300 hover:rotate-[15deg] hover:text-[#6366f1]"
        >
          <Github size={SOCIAL_ICON_SIZE} />
        </Link>
      </li>
      <li className="p-0 sm:p-2">
        <Link
          href="https://linkedin.com/in/kofi-kusi"
          target="_blank"
          aria-label="LinkedIn profile"
          className="flex items-center justify-center transition-all duration-300 hover:rotate-[15deg] hover:text-[#0077B5]"
        >
          <Linkedin size={SOCIAL_ICON_SIZE} />
        </Link>
      </li>
      <li className="p-0 sm:p-2">
        <Link
          href="mailto:appaukusi05@gmail.com"
          aria-label="Email address"
          className="flex items-center justify-center transition-all duration-300 hover:rotate-[15deg] hover:text-[#FF4D00]"
        >
          <Mail size={SOCIAL_ICON_SIZE} />
        </Link>
      </li>
    </ul>
  );
}

import { Copyright } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <div className="mt-2 flex flex-col justify-center items-center">
        <p className=" flex gap-2 items-center">
          {currentYear}
          <span>
            <Copyright size={16} className="" />
          </span>
          Kofi Kusi Appau.
        </p>
        <p className="text-foreground opacity-50">All Rights Reserved.</p>
      </div>
    </footer>
  );
}

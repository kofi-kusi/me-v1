import { CustomListItem } from "../ui/custom-list";
import Link from "next/link";

export default function Me() {
  return (
    <section className="transition-all duration-300 hover:translate-x-2">
      <h2>Who am i?</h2>
      <div className="my-2">
        <p className="ml-6">
          I’m a Computer Science student building full-stack web applications with <b>React</b>, <b>Next.js</b>, and <b>FastAPI</b>. I’m currently diving deep into <b>machine learning</b>, with a growing interest in how intelligent systems are designed and deployed. I thrive on exploring new technologies and tackling new challenges.
        </p>
      </div>

      <CustomListItem isSubItem>
        Read more about my <Link href="/writing">journey</Link>.
      </CustomListItem>
    </section>
  );
}

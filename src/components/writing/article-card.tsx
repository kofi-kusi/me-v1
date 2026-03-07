import Link from "next/link";

interface ArticleMetadata {
  title: string;
  date: string;
  subject: string;
  wordCount: number;
  filename: string;
  slug: string;
}

export default function ArticleCard({
  title,
  slug,
  date,
  subject,
}: Partial<ArticleMetadata>) {
  return (
    <article className="group p-3 -mx-3 rounded-lg transition-all duration-300 hover:bg-[var(--glow)]">
      <Link href={`/writing/${slug}`} className="block">
        <h1 className="font-bold group-hover:text-primary transition-colors duration-300">
          {title}
        </h1>
        <p className="text-muted-foreground text-sm">{date}</p>
        <p className="text-muted-foreground text-sm">{subject}</p>
      </Link>
    </article>
  );
}

import Link from "next/link"

interface ArticleMetadata {
    title: string
    date: string
    subject: string
    wordCount: number
    filename: string
    slug: string

}

export default function ArticleCard({ title, slug, date, subject } : Partial<ArticleMetadata>) {
    return (
        <article>
            <Link href={`/writing/${slug}`}>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{subject}</p>
            </Link>
        </article>
    )

}
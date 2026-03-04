import articlesData from "@/data/writing.json"
import ArticleCard from "./article-card"

export default function Articles(){
    return (
        <div className="flex flex-col gap-2">
        {
            articlesData.map(article => {
                return (
                    <ArticleCard
                        key={article.filename}
                        title={article.title}
                        date={article.date}
                        slug={article.slug}
                        subject={article.subject}
                    />
                )
            })
        }
        </div>
    )
}
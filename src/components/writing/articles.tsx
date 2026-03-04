import articlesData from "@/data/writing.json"

export default function Articles(){
    return (
        <>
        {
            articlesData.map(article => {
                return <h1 key={article.filename}>{article.title}</h1>
            })
        }
        </>
    )
}
import Image from "next/image"
import Link from "next/link"

interface BadgeProps {
    name: string
    url: string
    imgUrl: string
    from: string
}


export default function Badge({ imgUrl, url, name, from } : BadgeProps) {
    return (
        <Link href={url} target="_blank" className="flex w-fit gap-2 transition-all duration-300 hover:translate-x-2 group">
            <Image src={imgUrl} alt="" width={"110"} height={"110"}/>
            <div className="max-w-[200px]">
                <h3 className="font-semibold text-sm group-hover:text-primary">{name}</h3>
                <p className="text-muted-foreground">Issued by <i className="font-semibold">{from}</i></p>
            </div>
        </Link>            
    )
}
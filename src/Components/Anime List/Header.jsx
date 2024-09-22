import Link from "next/link"

export default function Header({ title, link, linkTitle }) {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {link && linkTitle ?
                <Link href={link} className="md:text-xl text-md text-primary">{linkTitle}</Link>
                : null
            }
        </div>
    )
}
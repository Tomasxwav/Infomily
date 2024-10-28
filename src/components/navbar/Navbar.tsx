import Link from "next/link"

export default function Navbar() {
    return (
        <div className="bg-[#0F1214] w-full flex flex-col gap-2">
            <div className="text-center text-3xl font-extrabold">
                <h1>INFOMILY</h1>
            </div>
            <div className="flex gap-12 px-4 m-2">
                <Link href="/">Documentos generales</Link>
                <Link href="/">Miembro1</Link>
                <Link href="/">Miembro2</Link>
                <Link href="/">Miembro3</Link>
            </div>
        </div>
    )
}
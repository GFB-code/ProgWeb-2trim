import Link from "next/link"
export default function Sidepage(){
    return(
        <nav className="grid grid-rows-1 grid-cols-3 text-center text-lg max-w-screen bg-blue-500 text-stone-300 dark:text-white">
            <p><Link href={"/"} className="hover:underline">Home</Link></p>
            <p><Link href={"/pages/ElementosHTML"} className="hover:underline text-center">Elementos HTML</Link></p>
            <p><Link href={"/pages/BaseNextjs"} className="hover:underline text-center">Básico Next.js</Link></p>
            {/* <Link href={"/pages/teste"} className="hover:underline">teste</Link> */}
        </nav>
    )
}
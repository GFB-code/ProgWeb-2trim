import Link from "next/link"
export default function Sidepage(){
    return(
        <nav className="grid grid-rows-1 grid-cols-4 text-center text-lg max-w-screen bg-blue-500">
            <p><Link href={"/"} className="hover:underline">Home</Link></p>
            <p><Link href={"/pages/ElementosHTML"} className="hover:underline text-center">Elementos HTML</Link></p>
            <p><Link href={"/pages/BaseNextjs"} className="hover:underline text-center">Básico Next.js</Link></p>
            <p><Link href={"/pages/CodeExmp"} className="hover:underline text-center">Códigos Exemplo</Link></p>
            {/* <Link href={"/pages/teste"} className="hover:underline">teste</Link> */}
        </nav>
    )
}
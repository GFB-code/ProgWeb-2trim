import Link from "next/link"
export default function Sidepage(){
    return(
        <nav className="flex flex-col min-h-screen max-w-1/8 bg-blue-500 pl-1">
            <Link href={"/"} className="hover:underline w-1">Home</Link>
            <Link href={"../pages/CadastroLivro"} className="hover:underline">Cadastrar Livro</Link>
            <Link href={"../pages/CadastroAluno"} className="hover:underline">Cadastrar Aluno</Link>
            
        </nav>
    )
}
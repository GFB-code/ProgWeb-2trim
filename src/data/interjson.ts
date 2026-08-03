import type {Livro} from "@/interfaces/livro"
import livrosJson from "@/jsonfiles/livros.json"
import type { Aluno } from "@/interfaces/aluno";
import alunosJson from "@/jsonfiles/alunos.json"
export const livros = livrosJson as Livro[]
export const alunos = alunosJson as Aluno[]

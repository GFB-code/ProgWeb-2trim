import {Livro} from "./livro"
export interface Aluno{
    nome : String,
    sala : String,
    livros_pegos: Array<Livro>
}
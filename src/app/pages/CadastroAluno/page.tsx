"use client"
import {alunos} from "@/data/interjson"
import { SubmitEvent } from "react"

function enviar(event: SubmitEvent<HTMLFormElement>){
    const formdata = new FormData(event.currentTarget);
    const l_nome = String(formdata.get("nome") ?? "");
    const l_autor = String(formdata.get("autor") ?? "");
    const l_genero = String(formdata.get("genero") ?? "");
    const l_quantia = String(formdata.get("quantia") ?? "");
    const l_disponivel = Boolean(formdata.get("disponivel") ?? false);

    if (!l_nome || !l_autor || !l_genero || !l_quantia){
        alert("Por favor, preencha todos os campos");
    }
    alert(l_nome + " " + l_autor + " " + l_genero + " " + l_quantia + " " + l_disponivel)
}

export default function CadastroAluno(){
    
    return(
        <main>
            <form onSubmit={enviar} className="border-1 p-2">
                <section>{/*Nome*/}
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" required className="border-1 rounded"/>
                </section>

                <section>{/*Autor*/}
                    <label htmlFor="autor">Autor: </label>
                    <input type="text" name="autor" required className="border-1 rounded"/>
                </section>

                <section>{/*Genero*/}
                    <label htmlFor="genero">Genero: </label>
                    <input type="text" name="genero" required className="border-1 rounded"/>
                </section>
                
                <section>{/*Quantia*/}
                    <label htmlFor="quantia">Quantia: </label>
                    <input type="number" name="quantia" required className="border-1 rounded"/>
                </section>
                
                <section>{/*Disponibilidade*/}
                    <label htmlFor="disponivel">Disponível*:</label>
                    <input type="checkbox" name="disponivel" value="tem" className="border-1 rounded"/>
                </section>
                <section>{/*Botões*/}
                    <button type="submit">Cadastrar</button>
                </section>
            </form>
        </main>
    )
}
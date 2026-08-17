import CodeExport from "@/content/codeExport"
import UseStatecode from "@/content/UseState"
import Link from "next/link"

export default function BaseNextjs(){
    return(
        <div>
            <main className="flex flex-col gap-3 mx-auto my-3 max-w-2/3">
                <div className="border-4 rounded">{/*div do export default function*/}
                    <header className="text-center text-lg">export default function</header>
                    <main className="max-w-8/9 mx-auto">
                        <div className="border border-gray-500 pl-1 mb-1">
                            <p>Embora não se limite a isso, neste caso vamos nos ater à utilização no Next.js, sendo a instanciação de uma função que funciona como uma parte de uma página html ou até a página inteira. Um exemplo:</p>
                            <CodeExport></CodeExport>
                            <p>Neste código, temos a instanciação da função <strong>Page</strong>, que, ao ser importada e utilizada como se fosse uma tag, fará com que o conteúdo dela seja carregado na página no lugar em que foi chamada. Caso queira puxar um arquivo inteiro para ser renderizado, como uma nova página de conteúdo, recomenda-se usar a tag <strong>Link</strong>, que deve ser importada do Next, como dito em <Link href={"/pages/ElementosHTML"}className="text-blue-500 hover:underline">ElementosHTML</Link></p>
                        </div>
                    </main>
                </div>
                <div className="border-4 rounded ">{/*div dos hooks*/}
                    <header className="text-center text-xl">Hooks</header>
                    <section className="pl-2 max-w-49/50 mx-auto mb-2"> {/*seção da contextualização*/}
                        <p className="mb-2 first-letter:pl-2">Por conta de como o React, biblioteca sobre a qual o Next.Js foi construído, funciona, deixando a renderização e leitura dos scripts para o lado do servidor, renderizar valores variáveis com rapidez se torna um problema, visto que ele mantém as variáveis inativas.</p>
                        <p className="first-letter:pl-2">Para essas situações, entretanto, podemos usar Hooks. Hooks são funções que acessam a memória interna do React e permitem, entre outras coisas, modificar o estado de uma variável</p>
                    </section>
                    <div className="border-2 grid grid-cols-2 max-w-16/17 mx-auto mb-2">{/*div do use client e useState*/}
                        <div className="border-r-1"> {/*div do use client*/}
                            <header className="text-lg text-center">Use Client</header>
                            <main className="px-1">
                                <p className="px-2">Apesar de não ser propriamente um Hook, é o que permite a utilização dos Hooks. Ao por <strong>"use client"</strong> no seu código, você informa ao React que aquele código levará em consideração o lado do cliente também e ele permitirá essa relação entre cliente e servidor. <br /> 
                                <span className="text-red-500/60 dark:text-red-400 text-sm"> Lembre-se: <span className="text-green-600 dark:text-green-400">"use client"</span> deve ser posto no topo do código, antes até mesmo das importações</span></p>
                            </main>
                        </div>
                        <div>{/*div do useState*/}
                            <header className="text-lg text-center">Use State</header>
                            <main className="px-1">
                                <p>
                                    Use State permite a criação de uma variável estado e uma função para modificá-la. Ele é especialmente útil quando queremos que um valor mude e seja imediatamente mostrado, sem precisar manualmente re-renderizar a página. Cada vez que a função que define o novo valor da variável instanciada, o valor será armazenado para ser renderizado no instante seguinte.
                                </p>
                                <UseStatecode></UseStatecode>
                            </main>
                        </div>
                    </div>
                </div>
                <div className="border-4 rounded">{/*div do TailwindCSS*/}
                    <header className="text-center text-lg">TailwindCSS</header>
                    <main className="mx-3 mb-2 flex flex-col gap-1">{/*região onde fica os elementos*/}
                        <div className="border-3 rounded pl-1">{/*div do background color*/}
                        <h1 className="font-bold">bg - Background Color</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do text-color*/}
                        <h1 className="font-bold">text-[color]</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do margin*/}
                        <h1 className="font-bold">m - Margin</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do padding*/}
                        <h1 className="font-bold">p - padding</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div da border*/}
                        <h1 className="font-bold">border</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do flex*/}
                        <h1 className="font-bold">flex</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do rounded*/}
                        <h1 className="font-bold">rounded</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div da altura*/}
                        <h1 className="font-bold">h - height</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div da largura*/}
                        <h1 className="font-bold">w - width</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do text-allign*/}
                        <h1 className="font-bold">text-[allign]</h1>
                        <p className="first-letter:pl-2">e</p>
                        </div>
                    </main>
                    
                </div>
                
            </main>
        </div>
    )
}
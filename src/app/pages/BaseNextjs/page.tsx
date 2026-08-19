import CodeExport from "@/content/codeExport"
import UseStatecode from "@/content/UseState"
import Link from "next/link"

export default function BaseNextjs(){
    return(
        <div>
            <main className="flex flex-col gap-3 mx-auto my-3 md:max-w-4/5 max-w-full">
                <div className="border-4 rounded">{/*div do export default function*/}
                    <header className="text-center text-lg">export default function</header>
                    <main className="max-w-20/21 mx-auto">
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
                        <h1 className="font-bold">bg-[color] - Background Color</h1>
                        <p className="first-letter:pl-2">É a classe do Tailwind responsável pelo background (plano de fundo). Neste caso, focamos na definição de uma cor para ele, cuja escrita é simples: "bg - [alguma cor em inglês] - [intensidade da cor]". Também é possível definir a opacidade, bastando adicionar, junto da intensidade da cor, "<strong>/</strong>[opacidade]". Lembre-se que os colchetes são apenas para que não aja confusão; quando escrever no atributo className, não use os colchetes</p>
                        <p className="first-letter:pl-2">Exemplo: "<span className="bg-green-500/50">bg-green-500/50</span>"</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do text-color*/}
                        <h1 className="font-bold">text-[color]</h1>
                        <p className="first-letter:pl-2">Semelhante ao <strong>bg</strong>, text também pode ser usado na definição da aparência de diversas maneiras, mas, neste caso, é usado para modificar a apresentação do texto. Neste caso, também focaremos na definição de uma cor ao texto: "text-[alguma cor em inglês]-[intensidade da cor]". Também pode-se definir a opacidade do texto com a mesma sintaxe apresentada no bg. Lembre-se que os colchetes são apenas para que não aja confusão; quando escrever no atributo className, não use os colchetes</p>
                        <p className="first-letter:pl-2">Exemplo: "<span className="text-blue-500/70">text-blue-500/70</span>"</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do margin*/}
                        <h1 className="font-bold">m - Margin</h1>
                        <p className="first-letter:pl-2">Define a margem (espaço do elemento para os outros elementos externos a ele), com a sintaxe: m-[numero]. Para situções que necessitam mais precisão ou caso você apenas se sinta mais confortável com a medida exata de pixels, também pode-se colocar, entre colchetes, o número de pixels (acompanhados de px). Caso você queira a margem em apenas um lado do elemento, basta lembrar-se de 4 <strong>propriedades físicas</strong>: <strong>t</strong> - (cima), <strong>b</strong> - (baixo), <strong>l</strong> - (esquerda), <strong>r</strong> - (direita) e adicioná-las junto a letra <strong>m</strong>; também é possível definir o sentido no qual a margem será aplicada para ambas as direções: <strong>x</strong> - (horizontal), <strong>y</strong> - (vertical)</p>
                        <p className="first-letter:pl-2 my-1">Exemplo: <span className="border p-1"><span className="mx-[15px] border">"mx-[15px]"</span></span></p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do padding*/}
                        <h1 className="font-bold">p - padding</h1>
                        <p className="first-letter:pl-2">Semelhante à margem, mas define o espaço do conteúdo do elemento para a borda, com a sintaxe: "p-[numero]. Tal qual a margem, pode-se definir com número de pixels e também pode-se especificar o ponto cardial ou sentido que se deseja aplicar</p>
                        <p className="first-letter:pl-2 my-1">Exemplo: <span className="border p-[5px]">"p-[5px]"</span></p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div da border*/}
                        <h1 className="font-bold">border</h1>
                        <p className="first-letter:pl-2">Define a borda do elemento. Se for posto isoladamente, vai fazer uma borda fina em volta do elemento. Se for acompanhado de uma cor (com a mesma estrutura de cor-intensidade), definirá a cor da borda; e se for acompanhado de um número ou colchetes com pixels, a grossura da borda será definida, com a estrutura: "border-[numero]" e "border-[cor]-[intesidade]".</p>
                        <p className="first-letter:pl-2 my-1">Exemplo: <span className="border-2">border-2</span></p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do flex*/}
                        <h1 className="font-bold">flex</h1>
                        <p className="first-letter:pl-2">Quando usado, o elemento e seus "filhos" são caracterizados como flexíveis, isto é, eles se adequam ao ambiente, redimensionado-se, reposicionando-se automaticamente. Também é possível definir algumas propriedades do funcionamento do <strong>flex</strong>. Pode-se, por exemplo, definir se os elementos devem ser dispostos em colunas ou em linhas (<strong>flex-col</strong> e <strong>flex-row</strong>), se podem crescer para se adequarem ao espaço (<strong>grow</strong>), se podem diminuir (<strong>shrink</strong>) e etc</p>
                        <div className="flex flex-col my-1 pr-2">Exemplo: <span className="border text-center"><p>1</p><p>2</p></span></div>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do rounded*/}
                        <h1 className="font-bold">rounded</h1>
                        <p className="first-letter:pl-2">Define se o elemento deve ter as bordas arredondadas e define quão arrendondadas elas devem ficar. Normalmente, para uma simples curva nas extremidades, basta pô-lo isoladamente; porém, para definir o grau de curvatura, pode-se usar as abreviações referentes a tamanhos predefinidos pelo Tailwind, estas sendo, da menor para a maior: <strong>xs, sm, md, lg e xl</strong> (também se pode ter um nível ainda maior, caso ponha algum número juntamente do xl, como "2xl").</p>
                        <p className="first-letter:pl-2 my-1">Exemplo: <span className="border-2 rounded-lg p-1">rounded-lg</span></p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div da altura*/}
                        <h1 className="font-bold">h - height</h1>
                        <p className="first-letter:pl-2">Define a altura do elemento, seguindo uma estrutura idêntica à da margem: h-[numero] ou, na medição em pixels, h-[numero<strong>px</strong>]</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div da largura*/}
                        <h1 className="font-bold">w - width</h1>
                        <p className="first-letter:pl-2">Define a largura do elemento, com uma estrutura e propriedades idênticas às da margem</p>
                        </div>

                        <div className="border-3 rounded pl-1">{/*div do text-allign*/}
                        <h1 className="font-bold">text-[align]</h1>
                        <p className="first-letter:pl-2">Como dito em <strong>text-[color]</strong>, o sufixo 'text' pode ser usado para gerenciar diversas propriedades do texto, umas destas sendo o alinhamento. os colchetes em volta de 'align' não foi por estilização, mas para representar, como nos outros blocos de explicação, um guia do que se deve por. Neste caso, os alinhamentos são: <strong>left</strong> (da esquerda pra direita), <strong>right</strong> (da direita pra esquerda), <strong>center</strong> (centralizado) e <strong>justify</strong> (justificado)</p>
                        <div className="flex flex-col"><p className="first-letter:pl-2">Exemplo:</p><p className="text-center border-2 m-1 mr-2">text-center</p></div>
                        </div>
                    </main>
                    
                </div>
                
            </main>
        </div>
    )
}
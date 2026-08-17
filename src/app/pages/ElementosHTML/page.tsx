import Imagecode from "@/content/Imagecode"
export default function ElementosHTML(){
    return(
        <div>
            <header className="text-3xl text-center font-extrabold mb-4 mt-2">Elementos HTML</header>
            <main className="flex flex-col gap-2 mx-3">
                {/*TAGS HTML*/}
                <section>
                    <header className="text-2xl font-bold mb-2">Tags HTML:</header>
                    <p>Tags básicas do html, essenciais para a criação e estruturação de uma página web simples.
                    </p>
                </section>
                <span className="border border-neutral-700 my-2"/>
                {/*div*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">div</h1>
                    <p><strong>div</strong> é uma tag que tem como propósito criar uma área (divisão) na página; ou seja, ela por si apenas faria um espaço horizontal vazio, mas que se torna muito útil quando deseja dividir os elementos da página em espaços próprios, ajudando na organização e apresentação da página.</p>
                    <p className="text-xs">Curiosidade: todas as seções desta página foram construidas dentro de uma div</p>
                </div>
                {/*p*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">p</h1>
                    <p><strong>p</strong> é a abreviação de "parágrafo" e sua função condiz com o nome. Ele é usado para criar um paragráfo na página, cuja formatação será a mais básica, e que ocupa toda a linha horizontal do elemento no qual está inserido</p>
                    <p className="text-xs">Curiosidade: as partes de explicação (e de curiosidade) foram feitas dentro de uma tag <strong>p</strong> </p>
                </div>
                {/*h1-h6*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">h1-h6</h1>
                    <p><strong>h1-h6</strong> se refere não a uma tag, mas a 6 tags diferentes cuja função é semelhante: representar um tipo de título, onde o <strong>h1</strong> é o maior e mais chamativo enquanto o <strong>h6</strong> é o menor e mais simples título. Todas as tags entre eles, como h2 ou h3, sinalizam um tipo de título entre esses extremos.</p>
                    <p className="font-thin text-xs">Curiosidade: esta seção foi construida dentro de uma div</p>
                </div>
                {/*br*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">br</h1>
                    <p><strong>br</strong> é uma tag vazia (não necessita da tag de fechamento {"</>"}) cuja função é "quebrar a linha", semelhante ao que acontece quando se pressiona <em>Enter</em> em um editor de texto
                    </p>                    
                </div>
                <span className="border border-neutral-700 my-3 mb-2"/>
                {/*TAGS SEMÂNTICAS*/}
                <section>
                    <header className="text-2xl font-bold mb-2">Tags Semânticas:</header>
                    <p>Tags que não apenas são usadas pela função, mas pela legibilidade do código, tanto para os programadores que precisam modificar o código quanto para os navegadores, que usam as tags semânticas para coisas como o leitor da página, aumentando a acessibilidade da página.
                    </p>
                </section>
                <span className="border border-neutral-700 my-2"/>
                {/*main*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">main</h1>
                    <p><strong>main</strong> é uma tag que cria um espaço no elemento em que ele está inserido, servindo como o compartimento onde fica o conteúdo principal.</p>
                    <p className="text-xs">Curiosidade: o <strong>main</strong> não pode ser "filho" de algumas tags, como <strong>main</strong> e <strong>header</strong></p>
                </div>
                {/*header*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">header</h1>
                    <p><strong>header</strong> é uma tag que se refere ao espaço superior do elemento no qual está inserido, funcionando como um cabeçalho.</p>
                    <p className="text-xs">Curiosidade: <strong>header</strong> não pode ser filho de algumas tags, ele, tal qual <strong>main</strong> e <strong>footer</strong>, tendem a serem aceitas em tags de container (tags cuja funções são criar espaços que contém outros elementos) como <strong>div</strong>.</p>
                </div>
                {/*footer*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">footer</h1>
                    <p><strong>footer</strong> é uma tag que se refere ao espaço inferior do elemento no qual está inserido, servindo de rodapé</p>
                    <p className="text-xs">Curiosidade: <strong>footer</strong> não pode ser filho de algumas tags, ele, tal qual <strong>main</strong> e <strong>header</strong>, tendem a serem aceitas em tags de container (tags cuja funções são criar espaços que contém outros elementos) como <strong>div</strong>.</p>
                </div>
                {/*article*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">article</h1>
                    <p><strong>article</strong> é uma tag cuja função é criar um espaço onde ficará informações acessórias ao conteúdo principal, como  os comentários de uma postagem</p>
                </div>
                <span className="border border-neutral-700 my-3 mb-2"/>
                {/*TAGS NEXT.JS*/}
                <section>
                    <header className="text-2xl font-bold mb-2">Tags do Next.js:</header>
                    <p>Tags próprias do Next.js que precisam ser importadas e cujas funções fazem uma melhor interação entre o framework
                    </p>
                </section>
                <span className="border border-neutral-700 my-3 mb-2"/>
                {/*Image*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">Image</h1>
                    <p><strong>Image</strong> é uma tag vazia, com seu funcionamento sendo ditado pelos seus atributos principais:</p>
                    <ul className="font-semibold pl-2 text-neutral-400 my-2">
                        <li>src <span className="font-normal text-black dark:text-white">- atributo que recebe a imagem a ser mostrada como argumento, seja em URL ou em forma de caminho</span></li>
                        <li>alt <span className="font-normal text-black dark:text-white">- caso haja falha no carregamento da imagem ou o navegador esteja em um modo de leitura, vai mostrar o texto dado como argumento no lugar da imagem</span></li>
                        <li>width <span className="font-normal text-black dark:text-white">- atributo que define a largura da imagem. Caso o height não seja definido, a imagem terá a altura igual à largura. A largura e altura podem ser definidas via CSS.</span></li>
                    </ul>
                    <p className="text-sm text-yellow-700 dark:text-yellow-100"><strong>Atenção:</strong> para que o Next.js aceite a imagem de <strong className="text-neutral-400">src</strong> de uma URL, é necessário dizer ao Next que o link é confiável. Uma maneira de fazer isto é abrir o arquivo <strong className="text-violet-500">next.config.ts</strong>, localizado na pasta do seu projeto Next, acima do <strong className="text-yellow-600">package.json</strong>, e adicionar, dentro da constante <strong className="text-blue-500">nextConfig</strong>, o código abaixo:</p>
                    <Imagecode></Imagecode>
                    <p className="font-semibold">Atente-se ao fato de que o código permitirá que qualquer URL de conexão http e https seja aceito como imagem, então atente-se com os links escolhidos </p>
                </div>
                {/*Link*/}
                <div className="border-3 rounded px-1">
                    <h1 className="font-bold text-xl pl-3">Link</h1>
                    <p><strong>Link</strong> é uma tag que pode servir pra dois propósitos semelhantes: Linkar uma outra página da web ou direcionar para outra página da próprio aplicação em que se trabalha por meio do roteamento, renderizando as páginas pelo lado do servidor e facilitando a navegação. Porém, ele, semelhante a tag Image, também precisa de atributos específicos para funcionar como desejado, com a diferença sendo que <strong>Link</strong> pede apenas um atributo para funcionar, este sendo:</p>
                    <ul className="font-semibold pl-2 text-neutral-400 mb-2 pt-2">
                        <li>href <span className="font-normal text-black dark:text-white">- atributo que guarda o link para uma outra página da web ou um caminho para uma página da aplicação via roteamento</span></li>
                    </ul>
                    <p className="text-yellow-700 dark:text-yellow-100 text-sm"> Por exemplo: dentro da pasta <strong className="text-red-500">app</strong> está localizado o <strong className="text-blue-600">page.tsx</strong>, certo? Caso você crie uma pasta dentro de <strong className="text-red-500">app</strong> chamada <strong className="text-gray-600 dark:text-gray-400">Pag2</strong> e faça toda uma página dentro de um <strong className="text-blue-600">page.tsx</strong> no interior da mesma, você pode usar a tag <strong className="text-green-600">Link</strong> na página original para que ela vá até <strong className="text-gray-600 dark:text-gray-400">Pag2</strong> e ela seja renderizada pondo como argumento em <strong className="text-zinc-600 dark:text-zinc-400">href</strong> assim: <span className="italic text-mist-700 dark:text-mist-300">"/Pag2"</span></p>
                </div>
            </main>
        </div>
    )
}
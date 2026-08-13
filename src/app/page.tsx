import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center my-2"> Programação HTML e Next.js Components</h1>
      <div className="m-auto border-3 max-w-3/4 p-2 pt-1 rounded">
        <header>Bem vindo! Aqui você pode aprender sobre o o básico necessário para programar com o Next Js, desde os elementos de uma página HTML até coisas exclusivas do Next que é bom ter em mente. Fora isso, também há códigos de exemplo para melhor fixação!</header>
        <main className="flex flex-start gap-2 mt-2 text-lg text-center">
          {/*Elementos HTML*/}
          <div className="flex-1 border-2 rounded">
            <header className="font-bold">Elementos HTML</header>
            <section className="text-justify text-base px-2 ">
              <p>Explicação e contextualização sobre como alguns elementos essenciais para uma página HTML, incluindo:</p>
              <ul className="pl-3 py-1 font-bold">
                <li>div</li>
                <li>p</li>
                <li>header</li>               
              </ul>
              <p>e mais</p>
            </section>
          </div>
          {/*Básico Next.js*/}
          <div className="border-2  flex-1 rounded">
            <header className="font-bold">Básico Next</header>
            <section className="text-justify text-base px-2">
              <p>Explicação sobre o básico recomendado para utilizar o Next.JS e algumas funções úteis no desenvolvimento, como exemplo:</p>
              <ul className="pl-3 py-1 font-bold">
                <li>Hooks</li>
                <li>Criação de outras páginas</li>
                <li>TailwindCSS</li>              
              </ul>
              <p>Para entendimento básico</p>
            </section>
          </div>
          {/*Códigos exemplos*/}
          <div className="border-2 flex-1 rounded">
            <header className="font-bold">Códigos exemplos</header>
            <section className="text-justify text-base px-2 mt-1">
              <p>Exemplos de códigos para melhor entendimento de como as coisas são usadas na prática</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

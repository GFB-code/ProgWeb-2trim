export default function BaseNextjs(){
    return(
        <div>
            <main className="flex flex-col gap-3 mx-auto my-3 max-w-2/3">
                <div className="border-4 rounded ">{/*div dos hooks*/}
                    <header className="text-center text-xl">Hooks</header>
                    <section className="pl-2"> {/*seção da contextualização*/}
                        <p>o</p>
                    </section>
                    <div className="border-2 grid grid-cols-2 max-w-16/17 mx-auto mb-2">{/*div do use client e useState*/}
                        <div className="border-r-1"> {/*div do use client*/}
                            <header className="text-lg text-center">Use Client</header>
                            <main className="px-1">
                                o
                            </main>
                        </div>
                        <div>{/*div do useState*/}
                            <header className="text-lg text-center">Use State</header>
                            <main className="px-1">
                                o
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
                <div className="border-4 rounded">
                    <header className="text-center text-lg">export default function</header>
                    <main className="max-w-8/9 mx-auto">
                        <div className="border border-gray-500 pl-1 mb-1">
                            <p>export</p>
                        </div>
                    </main>
                </div>
            </main>
        </div>
    )
}
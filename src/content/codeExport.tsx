export default function CodeExport(){
    const codemake = "export default function Page(){\n\treturn(\n\t\t<div>\n\t\t</div>\n\t)\n}"
    return(
        <div className="border-2 text-white border-gray-600 dark:border-gray-800 bg-zinc-900 pl-1 pt-1 my-1 mx-2 rounded h-[10em]">
            <textarea value={codemake} readOnly className="w-full h-full resize-none focus:outline-none"></textarea>
        </div>
    )
}
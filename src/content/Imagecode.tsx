export default function Imagecode(){
    const code = "images: {\n\tremotePatterns: [\n\t\t{\n\t\t\tprotocol:'https',\n\t\t\thostname:'**',\n\t\t\tport:'', \n\t\t\tpathname:'**',\n\t\t},\n\t\t{\n\t\t\tprotocol:'http',\n\t\t\thostname:'**',\n\t\t\tport:'',\n\t\t\tpathname:'**',\n\t\t}\n\t]\n}";
    return(
        <div className="border-2 bg-gray-700 border-zinc-800 text-green-200 dark:text-white dark:border-gray-700 dark:bg-gray-800 p-1 my-2 mx-5">
            <textarea readOnly className="w-full max-h-150 focus:outline-none resize-none" value={code}/>
        </div>
    )
}
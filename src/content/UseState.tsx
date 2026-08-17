export default function UseStatecode(){
    const codep1 = "const [var,setVar] = useState(0);\nsetVar(1)"
    const codep2 = "const [var2,setVar2] = useState(1);\nsetVar2(var2 + 1)"
    return(
        <div className="border-2 text-white border-gray-600 dark:border-gray-800 bg-zinc-900 p-1 m-1 rounded">
            {codep1}<span className="inline text-gray-500">{" // var = 1"}</span><br />
            {codep2}<span className="inline text-gray-500">{" // var2 = 2"}</span>
        </div>
    )
}
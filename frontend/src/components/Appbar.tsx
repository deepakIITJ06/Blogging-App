import { Link } from "react-router-dom"

export const Appbar = ()=> {
    return <div className=" border-b flex justify-between px-10 py-2 bg-cyan-200">
        <Link to={"/blogs"} className="font-bold flex justify-center flex-col">MyMedium 🖤</Link>
        <div>
        <Link to={"/publish"}>
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-md rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-8 mt-2">New Blog</button>
        </Link>
            <Avatar2 name="Deepak"/>
        </div>
    </div>
}

function Avatar2({name}: {name: string}) {
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-700 dark:text-gray-300">{name[0]}</span>
    </div>
}
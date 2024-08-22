import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const FullBlog = ({blog}: {blog: Blog})=> {
    // console.log({blog});
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-7 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-cyan-500 pt-2">
                        Published on 2nd july 2024
                    </div>
                    <div className="pt-3">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-cyan-500">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar3 name={blog.author.name || "Anonymous"}/>
                        </div>
                        <div>
                            <div className="font-bold text-xl">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author's ability!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Avatar3({name}: {name: string}) {
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-700 dark:text-gray-300">{name[0]}</span>
    </div>
}
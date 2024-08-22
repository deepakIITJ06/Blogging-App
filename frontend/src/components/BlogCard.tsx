import { Link } from "react-router-dom";

interface BlogcardInfo {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogcardInfo) => {
    return <Link to={`/blog/get/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <Avatar/>
            <div className="font-light pl-2 text-md flex justify-center flex-col">{authorName}</div>
            <div className="flex justify-center flex-col pl-2"><Circle/></div>
            <div className="font-thin pl-2 text-slate-500 text-md flex justify-center flex-col">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold pt-4">
            {title}
        </div>
        <div className="font-thin">
            {content.length > 100 ? content.slice(0,100)+"..." : content}
        </div>
        <div className="text-slate-500 text-sm">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
    </div>
    </Link>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

function Avatar() {
    // {name}: {name: string}
    // return <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    // <span className="font-medium text-gray-700 dark:text-gray-300">{name[0]}</span>
    // </div>
    return <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
    </div>
}

export default Avatar;
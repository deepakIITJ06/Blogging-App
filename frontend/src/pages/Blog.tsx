import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const {id} = useParams();
    // console.log({id});
    const {loading, blog} = useBlog({
        id: id || ""
    });
    // console.log(blog);
    if(loading) {
        return <div>
            <Appbar/>
            <div className="flex justify-center">
                <BlogSkeleton/>
            </div>
        </div>
    }
    return <div>
        {blog ? <FullBlog blog={blog}/> : <div>No blog found</div>}
    </div>
}
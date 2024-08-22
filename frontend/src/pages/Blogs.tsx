import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = ()=> {
    const {loading,blogs} = useBlogs();
    if(loading) {
        return <div>
            <Appbar/>
            <div className="flex justify-center">
                <div>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                </div>
            </div>
        </div>
    }
    console.log(blogs);
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map((blog)=>
                <BlogCard 
                    id={blog.id}
                    authorName={blog.author.name || "Deepak"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate="29 feb 2024"
                />
                )}
            </div>
        </div>
    </div>
}
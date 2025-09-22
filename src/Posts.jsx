import { use } from "react"
import Post from "./Post";

export default function Posts({fetchPromise}){
    const posts = use(fetchPromise);
    return(
        <div className="card">
            <h2>All post ar here: {posts.length} </h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}
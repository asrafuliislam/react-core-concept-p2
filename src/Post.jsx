export default function Post({post}){
    return(
        <div className="card">
            <h4> title : {post.title}</h4>
            <p>Description:{post.body} </p>
        </div>
    )
}
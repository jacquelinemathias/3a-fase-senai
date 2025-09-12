import { useEffect, useState } from "react"
import { useParams } from "react-router"

const PostDetail = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [id])

    return(
        <div className="p-4">
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p>Views: {post.views}</p>
        </div>
    )
}

export default PostDetail
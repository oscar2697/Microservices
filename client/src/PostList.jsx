import axios from "axios"
import { useEffect, useState } from "react"
import CommentCreate from "./CommentCreate"
import CommentList from "./CommentList"

const PostList = () => {
    const [posts, setPost] = useState({})
    const fetchPosts = async () => {
        const res =  await axios.get('http://localhost:4000/posts')
        setPost(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderedPost = Object.values(posts).map(post => {
        return (
            <div 
                className="card" 
                style={{width: '30%', marginBottom: '20px'}} 
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title} </h3>
                    <CommentList postId={post.id}/>
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        )
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPost}
        </div>
    )
}

export default PostList
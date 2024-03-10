import { useEffect, useState } from "react"
import Post from "../Post/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    function load() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }

    useEffect(() => {
        load()
    }, [])


    return (
        <>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.title} post={post} />)}
        </>
    )

}
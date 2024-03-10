import { useEffect, useState } from "react";
import Comment from "../Comment/Comment";

export default function Comments() {
    const [comments, setComments] = useState([]);



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => setComments(json))

    }, [])

    console.log(comments);


    return (
        <>
        <h1>Comments</h1>
            {comments.map(comment => <Comment key={comment.name} comment={comment} />)}
        </>
    )

}
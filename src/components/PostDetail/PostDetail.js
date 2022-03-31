import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    // postId form app.js
    const { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])
    //dependency nested use korar jonno post id

    return (
        <div>
            <h4>This is for post details for : {postId}</h4>

            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;
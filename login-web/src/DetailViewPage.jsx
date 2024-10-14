import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailViewPage.css';

const DetailViewPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="detail-container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default DetailViewPage;

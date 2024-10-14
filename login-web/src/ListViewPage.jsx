import React, { useEffect, useState } from 'react';
import './ListViewPage.css';
import { Link } from 'react-router-dom';

const ListViewPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="list-container">
            <h1>Post Lists</h1>
            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/detail/${post.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListViewPage;

import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadFeed = async () => {
            const latestPosts = await fetchPosts();
            setPosts(latestPosts.reverse()); 
        };

        loadFeed();
        const interval = setInterval(loadFeed, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Live Feed</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;
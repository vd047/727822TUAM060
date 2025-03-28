import React, { useEffect, useState } from "react";
import { fetchPosts, fetchUserComments } from "../services/api";

const TrendingPosts = () => {
    const [topPosts, setTopPosts] = useState([]);

    useEffect(() => {
        const loadTrendingPosts = async () => {
            const posts = await fetchPosts();
            const postsWithComments = await Promise.all(
                posts.map(async (post) => {
                    const comments = await fetchUserComments(post.id);
                    return { ...post, commentCount: comments.length };
                })
            );
            const maxComments = Math.max(...postsWithComments.map((p) => p.commentCount), 0);

            const trending = postsWithComments.filter((p) => p.commentCount === maxComments);
            setTopPosts(trending);
        };

        loadTrendingPosts();
    }, []);

    return (
        <div>
            <h2>Trending Posts</h2>
            <ul>
                {topPosts.map((post) => (
                    <li key={post.id}>
                        {post.title} - {post.commentCount} comments
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingPosts;
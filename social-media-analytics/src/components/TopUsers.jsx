import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchUserPosts } from '../services/api';

const TopUsers = () => {
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        const loadTopUsers = async () => {
            const users = await fetchUsers();
            const usersWithPosts = await Promise.all(users.map(async (user) => {
                const posts = await fetchUserPosts(user.id);
                return { ...user, postCount: posts.length };
            }));

            const sortedUsers = usersWithPosts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
            setTopUsers(sortedUsers);
        };

        loadTopUsers();
    }, []);

    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {topUsers.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.postCount} posts
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopUsers;

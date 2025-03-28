import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';
import './App.css';


const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Top Users</Link></li>
                    <li><Link to="/trending">Trending Posts</Link></li>
                    <li><Link to="/feed">Live Feed</Link></li>
                </ul>
            </nav>
            
            <Routes>
                <Route path="/" element={<TopUsers />} />
                <Route path="/trending" element={<TrendingPosts />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </Router>
    );
};

export default App;
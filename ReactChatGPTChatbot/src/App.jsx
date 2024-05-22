import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChatPage from './ChatPage';
import SessionManagementPage from './SessionManagementPage';
import ActivityTrackingPage from './ActivityTrackingPage';

const App = ({ addMessage }) => {
    console.log("App component rendered");
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Chat</Link></li>
                    <li><Link to="/sessions">Sessions</Link></li>
                    <li><Link to="/activity">Activity Tracking</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<ChatPage addMessage={addMessage} />} />
                <Route path="/sessions" element={<SessionManagementPage />} />
                <Route path="/activity" element={<ActivityTrackingPage />} />
            </Routes>
        </Router>
    );
};

export default App;

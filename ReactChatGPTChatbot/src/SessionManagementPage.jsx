import React, { useState, useEffect } from 'react';
import './SessionManagementPage.css';

const SessionManagementPage = () => {
    const [sessions, setSessions] = useState([]);
    const [activeSession, setActiveSession] = useState(null);

    useEffect(() => {
        const storedSessions = JSON.parse(localStorage.getItem('sessions')) || [];
        const nonEmptySessions = storedSessions.filter(session => session.messages && session.messages.length > 0);
        setSessions(nonEmptySessions);
    }, []);

    const toggleSession = (index) => {
        setActiveSession(activeSession === index ? null : index);
    };

    return (
        <div>
            <h2>Session Management Page</h2>
            <div className="session-list">
                {sessions.map((session, index) => (
                    <div key={index} className="session-card">
                        <div className="session-header" onClick={() => toggleSession(index)}>
                            <h3>{session.name}</h3>
                        </div>
                        {activeSession === index && (
                            <div className="session-content">
                                <pre>{JSON.stringify(session.messages, null, 2)}</pre>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SessionManagementPage;

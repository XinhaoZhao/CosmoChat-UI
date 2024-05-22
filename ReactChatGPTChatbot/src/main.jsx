import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const Main = () => {
    const [currentSession, setCurrentSession] = useState([]);
    const [sessionId, setSessionId] = useState(() => {
        const storedSessions = JSON.parse(localStorage.getItem('sessions')) || [];
        return storedSessions.length + 1;
    });

    useEffect(() => {
        const storedSessions = JSON.parse(localStorage.getItem('sessions')) || [];
        setCurrentSession(storedSessions);
    }, []);

    const addMessage = (message) => {
        const newMessages = [...currentSession, message];
        setCurrentSession(newMessages);

        const storedSessions = JSON.parse(localStorage.getItem('sessions')) || [];
        if (storedSessions.length === 0 || storedSessions[storedSessions.length - 1].id !== sessionId) {
            storedSessions.push({ id: sessionId, name: `Session ${sessionId}`, messages: newMessages });
        } else {
            storedSessions[storedSessions.length - 1].messages = newMessages;
        }
        localStorage.setItem('sessions', JSON.stringify(storedSessions));

        const usageData = JSON.parse(localStorage.getItem('usageData')) || [];
        const sessionIndex = storedSessions.length - 1;
        if (usageData[sessionIndex]) {
            usageData[sessionIndex].messageCount = newMessages.length;
        } else {
            usageData.push({ session: `Session ${sessionId}`, messageCount: newMessages.length });
        }
        localStorage.setItem('usageData', JSON.stringify(usageData));
    };

    console.log("Main component rendered");
    return (
        <App addMessage={addMessage} />
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main />);

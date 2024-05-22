import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityTrackingPage = () => {
    const [usageData, setUsageData] = useState([]);

    useEffect(() => {
        const storedUsageData = JSON.parse(localStorage.getItem('usageData')) || [];
        setUsageData(storedUsageData);
    }, []);

    const data = {
        labels: usageData.map((data) => data.session),
        datasets: [
            {
                label: 'Messages Used',
                data: usageData.map((data) => data.messageCount),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h2>Activity Tracking Page</h2>
            {usageData.length > 0 ? (
                <Bar data={data} />
            ) : (
                <p>No usage data available.</p>
            )}
        </div>
    );
};

export default ActivityTrackingPage;

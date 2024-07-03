import React from 'react';
import './HistoryPage.css';

const HistoryPage = () => {
  const historyData = [
    { id: 1, location: 'Estiam, Paris 75020', time: 'Jun 10, 2024 9:41 AM' },
    { id: 2, location: 'Estiam, Paris 75020', time: 'Jun 10, 2024 9:41 AM' },
    { id: 3, location: 'Eiffel, Paris 68668', time: 'Jun 10, 2024 19:41 PM' },
    { id: 4, location: 'Estiam, Paris 75020', time: 'Jun 10, 2024 9:41 AM' }
  ];

  return (
    <div className="history-page">
      <h1>Connection History</h1>
      {historyData.map((entry) => (
        <div key={entry.id} className="history-entry">
          <div className="location">{entry.location}</div>
          <div className="time">{entry.time}</div>
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;

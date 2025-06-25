import React, { useState } from 'react';
import './DateDetails.css';
import dayjs from 'dayjs';
import AddEventModal from '../addevents/AddEvents';
import { useNavigate } from 'react-router-dom';

const DateDetails = ({ date, events, setEvents }) => {
  if(date==null)return;
  const selectDay = date.format('YYYY-MM-DD');
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();

  const selectDayEvents = events.filter(event => event.date === selectDay);
  const [task, setTask] = useState(selectDayEvents[0] || null);

  const handleTasks = (e) => {
    setTask(e);
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowModel(false);
  };

  return (
    <div className='date-details-container'>
      <h3>{selectDay}</h3>

      <div className="task-button-group">
        {selectDayEvents.length > 0 ? (
          selectDayEvents.map((e, idx) => (
            <button
              onClick={() => handleTasks(e)}
              key={idx}
              className={`task-btn ${task && task.title === e.title ? 'active' : ''}`}
            >
              {e.title.slice(0, 10)}...
            </button>
          ))
        ) : (
          <p>No Tasks added on this date</p>
        )}
      </div>

      {selectDayEvents.length > 0 && task && (
        <div className='date-details-content'>
          <h3>{task.title}</h3>
          <p><strong>Time:</strong> {task.time}</p>
          <p><strong>Duration:</strong> {task.duration}</p>
          {task.important && <p><strong>⭐ Important</strong></p>}
          <p>{task.description}</p>
        </div>
      )}

      {showModel && <AddEventModal onClose={() => setShowModel(false)} onSave={handleAddEvent} />}

      <div className="date-details-actions">
        <button onClick={() => setShowModel(true)}>+ Add Event</button>
        <button onClick={() => navigate(`/day/${selectDay}`)}>📅 Timeline View</button>
      </div>
    </div>
  );
};

export default DateDetails;

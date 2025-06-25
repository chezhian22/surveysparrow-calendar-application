import React from 'react';
import dayjs from 'dayjs';
import './SideBar.css';
import { FaRegCalendarAlt } from 'react-icons/fa';

function Sidebar({ events }) {
  const today = dayjs();
  const todayEvents = events.filter(event => event.date === today.format('YYYY-MM-DD'));
  const importantTasks = todayEvents.filter(event => event.important === true);

  const renderMiniCalendar = () => {
    const start = today.startOf('month').startOf('week');
    const end = today.endOf('month').endOf('week');
    const days = [];
    let date = start;

    while (date.isBefore(end) || date.isSame(end, 'day')) {
      days.push(date);
      date = date.add(1, 'day');
    }

    return (
      <div className="mini-calendar">
        <div className="mini-calendar-header">
          <FaRegCalendarAlt className="calendar-icon" /> Mini Calendar
        </div>
        <div className="mini-calendar-grid">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
            <div key={`${day}-${idx}`} className="mini-day-label">{day}</div>
          ))}
          {days.map(d => (
            <div
              key={d.format('YYYY-MM-DD')}
              className={`mini-day ${d.isSame(today, 'day') ? 'mini-today' : ''}`}
            >
              {d.date()}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <section className="sidebar-section">
        <h3>📅 Today's Events</h3>
        {todayEvents.length === 0 ? (
          <p className="no-events">No events</p>
        ) : (
          todayEvents.map((e, idx) => (
            <div key={`${e.title}-${e.time}`} className="sidebar-event">
              <strong>{e.title}</strong>
              <small>{e.time} • {e.duration}</small>
            </div>
          ))
        )}
      </section>

      <section className="sidebar-section">
        <h3>⭐ Important Tasks</h3>
        {importantTasks.length === 0 ? (
          <p className="no-events">No important tasks</p>
        ) : (
          importantTasks.map((e, idx) => (
            <div key={`${e.title}-important-${idx}`} className="sidebar-event important">
              <strong>{e.title}</strong>
              <small>{e.time} • {e.duration}</small>
            </div>
          ))
        )}
      </section>

      {renderMiniCalendar()}
    </div>
  );
}

export default Sidebar;

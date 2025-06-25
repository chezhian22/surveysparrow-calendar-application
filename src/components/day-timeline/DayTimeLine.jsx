import React from 'react';
import './DayTimeline.css';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const DayTimeline = ({ events }) => {
  const hours = Array.from({ length: 23 }, (_, i) => i + 1); // 1am to 11pm
  const { date } = useParams(); // expected format: 'YYYY-MM-DD'

  // Filter events for the selected date
  const filteredEvents = events.filter(event => dayjs(event.date).isSame(dayjs(date), 'day'));

  const getEventsForHour = (hour) => {
    return filteredEvents.filter(event => {
      const eventHour = parseInt(event.time.split(':')[0], 10);
      return eventHour === hour;
    });
  };

  return (
    <div className="day-timeline">
      <h2>Day View: {date}</h2>
      <div className="timeline">
        {hours.map(hour => (
          <div key={hour} className="time-slot">
            <div className="time-label">{hour}:00</div>
            <div className="event-list">
              {getEventsForHour(hour).map((event, idx) => (
                <div key={idx} className="event-block">
                  <strong>{event.title}</strong>
                  <div className="time-meta">{event.time} • {event.duration}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayTimeline;

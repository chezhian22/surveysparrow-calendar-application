import React from 'react';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import './CalendarGrid.css';
import CalendarHeader from '../calendar-header/CalendarHeader';
dayjs.extend(isToday);

function CalendarGrid({ currentDate,setCurrentDate, events, selectDate, setSelectDate }) {
  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');

  const days = [];
  let date = startDate;

  while (date.isBefore(endDate) || date.isSame(endDate, 'day')) {
    days.push(date);
    date = date.add(1, 'day');
  }

  const getEventsForDate = (date) => {
    return events.filter(event => event.date === date.format('YYYY-MM-DD'));
  };

  const isSelectedDay = (date) => {
   
    return selectDate && date.isSame(selectDate, 'day');
  };
  console.log(selectDate)

  const handleClick = (day) => {
    setSelectDate(day);
  };

  return (
    <>
    <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate}/>
    <div className="calendar-grid">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
        <div key={day} className="day-label">{day}</div>
      ))}

      {days.map(day => {
        const dayEvents = getEventsForDate(day);
        return (
          <div
            key={day.format('YYYY-MM-DD')}
            className={`calendar-day ${day.isToday() ? 'today' : ''} ${isSelectedDay(day) ? 'selected-date' : ''}`}
            onClick={() => handleClick(day)}
          >
            <div className="day-number">{day.date()}</div>
            {dayEvents.map((event, idx) => (
              <div key={idx} className="event">
                {event.title} ({event.time})
              </div>
            ))}
          </div>
        );
      })}
    </div>
    </>
    
  );
}

export default CalendarGrid;

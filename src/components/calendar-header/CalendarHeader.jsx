import React from 'react';
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import './CalenderHeader.css';



function CalendarHeader({ currentDate,setCurrentDate}) {
  return (
    <div className="calendar-header">
      <button onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))}><FcPrevious/></button>
      <h2>{currentDate.format('MMMM YYYY')}</h2>
      <button onClick={() => setCurrentDate(currentDate.add(1, 'month'))}><FcNext/></button>
    </div>
  );
}

export default CalendarHeader;
// src/main/Home.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CalendarGrid from '../components/calender-grid/CalendarGrid';

const Home = () => {
  const { currentDate,setCurrentDate, events, selectDate, setSelectDate,setEvents} = useOutletContext();

  return (
    <CalendarGrid
      events={events}
      selectDate={selectDate}
      setSelectDate={setSelectDate}
      setEvents ={setEvents}
      currentDate={currentDate}
      setCurrentDate={setCurrentDate}
    />
    
  );
};

export default Home;

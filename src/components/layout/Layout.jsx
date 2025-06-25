// src/Layout.jsx
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Sidebar from '../sidebar/SideBar';
import DateDetails from '../date-details/DateDetails';
import { Outlet } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import './Layout.css'

const Layout = ({ events, setEvents }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className={showSidebar ? "container1" : "container2"}>

      {selectDate && <DateDetails date={selectDate} events={events} setEvents={setEvents} />}
      
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
       <IoIosMenu style={{fontSize:'20px'}}/>
      </button>

      {showSidebar && <Sidebar currentDate={currentDate} events={events} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}

      <Outlet context={{ currentDate, events, selectDate, setSelectDate,setCurrentDate }} />
      
    </div>
  );
};

export default Layout;

// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import eventsData from './data/events.json';
import Home from './pages/Home';
import DayTimeline from './components/day-timeline/DayTimeLine';
import Layout from './components/layout/Layout';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout events={events} setEvents={setEvents} />}>
          <Route index element={<Home />} />
          <Route path="day/:date" element={<DayTimeline events={events} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import './AddEvents.css';

function AddEventModal({ onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, date, time, duration, description, important });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal clean-style">
        <h3>Add New Event</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Title <span className='label-required'>*</span></span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label className='form-label'>
            <span>Date <span className='label-required'>*</span></span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>

          <label>
           <span>Time <span className='label-required'>*</span></span>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </label>

          <label>
           <span>Duration <span className='label-required'>*</span></span>
            <input
              type="text"
              placeholder="e.g., 1h 30m"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </label>

          <label>
            Description
            <textarea
              placeholder="Optional details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
            />
          </label>

          <label className="checkbox-container">
            <span><input
              type="checkbox"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
            /><span> Mark as Important</span></span>
            
            
          </label>

          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEventModal;

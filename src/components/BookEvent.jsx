import React, { useState } from 'react';
import events from '../eventData';
import './BookEvent.css';

function Bookevent() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showTicketPopup, setShowTicketPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', tickets: 1 });

  const handleBookNow = (event) => {
    setSelectedEvent(event);
    setShowTicketPopup(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the booking here (in real scenario, you can send the data to a server)
    alert('Booking successful!');
    setShowTicketPopup(true); // Display the ticket after booking
  };

  const handleClosePopup = () => {
    setShowTicketPopup(false);
  };

  return (
    <div className="EventBook" style={{marginLeft: "300px"}}>
      <h1>Event Booking System</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Venue: {event.venue}</p>
            <p>Available Tickets: {event.availableTickets}</p>
            <button className='btn btn-success' onClick={() => handleBookNow(event)}>Book Now</button>
          </li>
        ))}
      </ul>

      {showTicketPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Ticket for {selectedEvent.title}</h2>
            <p>Date: {selectedEvent.date}</p>
            <p>Venue: {selectedEvent.venue}</p>
            <p>Booked by: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Tickets: {formData.tickets}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      {selectedEvent && (
        <div className="booking-form">
          <h2>Book Tickets for {selectedEvent.title}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input className='ticket-input'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input className='ticket-input'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Number of Tickets:
              <input className='ticket-input'
                type="number"
                name="tickets"
                value={formData.tickets}
                onChange={handleInputChange}
                min="1"
                max={selectedEvent.availableTickets}
                required
              />
            </label>
            <br />
            <button type="submit" className='btn btn-primary'>Confirm Booking</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Bookevent;

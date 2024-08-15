import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Booking.css'; // Import the CSS file for styling
import axios from 'axios'; // Import axios
import ReviewsPage from '../ReviewForm';

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cost, tourId } = location.state || {}; // Extract tourId from location.state
  const [members, setMembers] = useState(1);
  const [date, setDate] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  // Replace with actual username from user context or authentication
  const username = 'user123';

  const handleCalculateTotal = () => {
    const costNumber = parseFloat(cost) || 0;
    setTotalAmount(members * costNumber);
  };

  const handleHome = () => {
    navigate('/Home');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      tourId, // from location.state
      username, // replace with actual username
      numberOfMembers: members,
      date,
      totalAmount,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/bookings', bookingData);
      if (response.status === 201) {
        alert('Booking confirmed successfully!');
        navigate('/Home'); // Navigate to another page after booking confirmation
      } else {
        alert('Failed to confirm booking.');
      }
    } catch (error) {
      console.error('There was an error booking the trip:', error);
      alert('There was an error confirming your booking.');
    }
  };

  return (
    <div className="booking-container">
      <header className="navbar">
        <div className="logo">TravelNow</div>
        <ul className="nav-links">
          <li onClick={handleHome}>Home</li>
          <li>Most Visited</li>
          <li>Trips</li>
          <li>Contact</li>
        </ul>
      </header>

      <div className="booking-hero">
        <h1>Book Your Experience</h1>
        <p>Secure your spot for an unforgettable experience!</p>
      </div>

      <div className="booking-form-container">
        <form onSubmit={handleSubmit} className="booking-form">
          <input
            type="number"
            min="1"
            value={members}
            onChange={(e) => setMembers(parseInt(e.target.value, 10))}
            placeholder="Number of Members"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="text"
            value={`Total Amount: $${totalAmount}`}
            readOnly
            placeholder="Total Amount"
          />
          <button
            type="button"
            onClick={handleCalculateTotal}
            className="calculate-button"
          >
            Calculate Total
          </button>
          <button
            type="submit"
            className="submit-button"
          >
            Confirm Booking
          </button>
        </form>
      </div>
      <ReviewsPage/>
    </div>
  );
};

export default Booking;

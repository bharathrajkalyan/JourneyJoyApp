import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './Login';
import Home from './Home/Home';
import Destination from './Destination/Destination';
import AttractionPage from './Attraction';
import Booking from './Booking/Booking';
import ReviewsPage from './ReviewForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/attraction" element={<AttractionPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/review" element={<ReviewsPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;

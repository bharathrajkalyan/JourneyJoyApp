import React from 'react';
import { Container, Box, Typography, Paper, Grid, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const AttractionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, details, cost, image, wear, thingsToDo, locationCoords } = location.state || {};

  const handleBooking = () => {
    // Ensure cost is a number
    const costNumber = parseFloat(cost.replace(/[^0-9.-]+/g, '')) || 0;
    navigate('/Booking', {
      state: { cost: costNumber }
    });
  };

  const handleHome = () => {
    navigate('/Home');
  };

  // City coordinates for static map
  const cities = [
    { name: 'City 1', lat: 51.505, lng: -0.09 },
    { name: 'City 2', lat: 48.8566, lng: 2.3522 },
    { name: 'City 3', lat: 40.7128, lng: -74.0060 },
  ];

  // Generate URL for static map images
  const locationMapUrl = `https://static-maps.yandex.ru/1.x/?l=map&pt=${locationCoords ? `${locationCoords[1]},${locationCoords[0]}` : '0,0'}&size=600,400&z=13`;
  const citiesMapUrl = `https://static-maps.yandex.ru/1.x/?l=map&pt=${cities.map(city => `${city.lng},${city.lat}`).join('~')}&size=600,400&z=2`;

  return (
    <>
      <header className="navbar">
        <div className="logo">TravelNow</div>
        <ul className="nav-links">
          <li onClick={handleHome}>Home</li>
          <li>Most Visited</li>
          <li>Trips</li>
          <li>Contact</li>
        </ul>
      </header>

      <Container>
        <Box my={4} style={{ paddingTop: '60px' }}>
          <Typography variant="h4" gutterBottom>{name || 'Attraction Name'}</Typography>
          <Typography variant="body1" color="textSecondary">{details || 'Details about this attraction will appear here.'}</Typography>
          <Typography variant="body2" color="green">Open now • 8:45 AM - 11:45 PM</Typography>
          <Button variant="text" color="primary" style={{ marginBottom: 16 }}>Write a review</Button>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <img src={image || 'https://via.placeholder.com/800x400'} alt={name || 'Attraction Image'} style={{ width: '100%', borderRadius: 8 }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper style={{ padding: 16 }}>
                <Typography variant="h6">About</Typography>
                <Typography variant="body2" paragraph>{details || 'Details about this attraction will appear here.'}</Typography>
                <Typography variant="h6" style={{ marginBottom: 8 }}>What to Wear</Typography>
                <Typography variant="body2">{wear || 'N/A'}</Typography>
                <Typography variant="h6" style={{ marginBottom: 8 }}>Things to Do</Typography>
                <Typography variant="body2">{thingsToDo || 'N/A'}</Typography>
                <Typography variant="h6" style={{ marginBottom: 8 }}>Admission tickets</Typography>
                <Typography variant="h6" color="primary" style={{ marginBottom: 8 }}>{cost || 'N/A'}</Typography>
                <Button onClick={handleBooking} variant="contained" color="primary">Reserve Now</Button>
              </Paper>
            </Grid>
          </Grid>

          {/* FAQs Section */}
          <Box my={4}>
            <Typography variant="h6" gutterBottom>Frequently Asked Questions</Typography>
            <Paper style={{ padding: 16 }}>
              <Typography variant="body2" paragraph>
                <strong>Q: What are the opening hours?</strong><br />
                A: The attraction is open daily from 8:45 AM to 11:45 PM.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Q: Is there a dress code?</strong><br />
                A: Comfortable clothing and footwear are recommended.
              </Typography>
              {/* Add more FAQs as needed */}
            </Paper>
          </Box>

          {/* Reviews Section */}
          <Box my={4}>
            <Typography variant="h6" gutterBottom>Reviews</Typography>
            <Paper style={{ padding: 16 }}>
              <Typography variant="body2" paragraph>
                <strong>Gokul</strong><br />
                This is a fantastic place! Highly recommend visiting.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Dharun</strong><br />
                Beautiful scenery and lots of activities to do. Loved it!
              </Typography>
              {/* Add more reviews as needed */}
              <Button onClick={handleBooking} variant="contained" color="primary" style={{ marginTop: 16 }}>Write a Review</Button>
            </Paper>
          </Box>
          
        </Box>
      </Container>
    </>
  );
};

export default AttractionPage;

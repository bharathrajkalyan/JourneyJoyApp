import React, { useState } from 'react';
import { Container, Tabs, Tab, Box, Button, Typography, Grid, Paper, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function TripsPage() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleTripClick = (trip) => {
    navigate('/Attraction', { state: { ...trip } });
  };

  function handleHome() {
    navigate('/Home');
  }

  const upcomingTrips = [
    {
      id: 1,
      name: 'Trip to New York',
      details: 'Explore the bustling streets of NYC, visit Times Square and the Statue of Liberty.',
      cost: '$1,200',
      image: '/images/USA.jpg',
      wear: 'Comfortable walking shoes, layered clothing.',
      thingsToDo: 'Visit Central Park, Broadway shows, Empire State Building.'
    },
    {
      id: 2,
      name: 'Trip to San Francisco',
      details: 'Experience the Golden Gate Bridge, Alcatraz Island, and scenic views.',
      cost: '$1,500',
      image: '/images/San.jpg',
      wear: 'Light jacket, comfortable shoes.',
      thingsToDo: 'Bike across the Golden Gate Bridge, explore Fisherman\'s Wharf.'
    },
    {
      id: 3,
      name: 'Trip to Miami',
      details: 'Enjoy the vibrant nightlife, beautiful beaches, and Cuban culture.',
      cost: '$1,000',
      image: '/images/Miami.jpg',
      wear: 'Beachwear, sunglasses, sunscreen.',
      thingsToDo: 'Visit South Beach, explore Little Havana.'
    },
    {
      id: 4,
      name: 'Trip to Las Vegas',
      details: 'Discover the excitement of the Las Vegas Strip, casinos, and live shows.',
      cost: '$1,300',
      image: 'images/Lasveges.jpg',
      wear: 'Smart casual, evening wear.',
      thingsToDo: 'Attend a show, visit the Bellagio Fountains.'
    },
    {
      id: 5,
      name: 'Trip to Chicago',
      details: 'Visit Millennium Park, the Art Institute, and take a stroll along the riverwalk.',
      cost: '$1,100',
      image: '/images/Chicago.jpg',
      wear: 'Layered clothing, comfortable shoes.',
      thingsToDo: 'Explore the Art Institute, visit Navy Pier.'
    },
    {
      id: 6,
      name: 'Trip to Houston',
      details: 'Explore Space Center Houston and vibrant city life.',
      cost: '$1,100',
      image: 'images/Houston.jpg',
      wear: 'Comfortable clothing, hat, sunglasses.',
      thingsToDo: 'Visit Space Center, explore Houston Museum District.'
    },
    // other trips...
  ];

  const pastTrips = [
    {
      id: 1,
      name: 'Trip to Los Angeles',
      details: 'Tour Hollywood, Santa Monica, and enjoy the sunny beaches.',
      cost: '$1,400',
      image: 'https://via.placeholder.com/150',
      wear: 'Casual wear, sunscreen, sunglasses.',
      thingsToDo: 'Walk of Fame, Griffith Observatory, Venice Beach.'
    },
    // other trips...
  ];

  const unfiledItems = [
    {
      id: 1,
      name: 'Unfiled Item 1',
      details: 'Details about the unfiled item 1',
      cost: 'N/A',
      image: 'https://via.placeholder.com/150',
      wear: 'N/A',
      thingsToDo: 'N/A'
    },
    // other items...
  ];

  const renderTrips = (trips) => (
    <Grid container spacing={4}>
      {trips.map(trip => (
        <Grid item xs={12} key={trip.id}>
          <Paper style={{ padding: 20, backgroundColor: '#c0d3e5', color: 'black' }}>
            <Grid onClick={() => handleTripClick(trip)} container spacing={4}>
              <Grid item>
                <Avatar variant="square" src={trip.image} style={{ width: 300, height: 300 }} />
              </Grid>
              <Grid item xs>
                <Typography variant="h4">{trip.name}</Typography><br></br>
                <Typography variant="h5">{trip.details}</Typography>
                <Typography variant="h5">What to Wear: {trip.wear}</Typography>
                <Typography variant="h5">Things to Do: {trip.thingsToDo}</Typography><br></br>
                <Typography variant="h5" style={{ fontWeight: 'bolder', color: '#1976d2' }}>
                  Travel Cost: {trip.cost}
                </Typography>
              </Grid>
              <Button className="button" variant="contained" color="primary" style={{ marginTop: 200, marginBottom: 100 }}>Add a Trip</Button>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

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
          <Typography variant="h4" align="center"></Typography>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Upcoming Trips" />
            <Tab label="Past Trips" />
            <Tab label="Unfiled Items" />
          </Tabs>
          <Box mt={4}>
            {tabValue === 0 && renderTrips(upcomingTrips)}
            {tabValue === 1 && renderTrips(pastTrips)}
            {tabValue === 2 && renderTrips(unfiledItems)}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default TripsPage
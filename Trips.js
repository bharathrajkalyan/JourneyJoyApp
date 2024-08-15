import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Avatar, Box } from '@mui/material';
import axios from 'axios';

function AddTripPage() {
  const [addedTrips, setAddedTrips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/trips')
      .then(response => {
        setAddedTrips(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the trips!', error);
      });
  }, []);

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" style={{ marginBottom: '30px', fontWeight: 'bold', color: '#3f51b5' }}>
          Added Trips
        </Typography>
        {addedTrips.length > 0 ? (
          <Grid container spacing={4}>
            {addedTrips.map((trip, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Paper style={{ padding: 20, backgroundColor: '#f5f5f5', color: '#333', borderRadius: '15px' }}>
                  <Grid container direction="column" spacing={2} style={{ textAlign: 'center' }}>
                    <Grid item>
                      <Avatar variant="square" src={trip.image} style={{ width: 300, height: 200, margin: '0 auto', borderRadius: '10px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">{trip.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">{trip.details}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" style={{ color: 'blueviolet', fontWeight: 'bold' }}>
                        Cost: ${trip.cost.toLocaleString()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
            No trips have been added yet.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default AddTripPage;

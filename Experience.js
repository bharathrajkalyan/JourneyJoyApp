import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Paper, Button, Avatar } from '@mui/material';
import { LocationOn, FavoriteBorder } from '@mui/icons-material';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const experiences = [
  {
    id: 1,
    title: 'All-Inclusive Ubud Private Tour',
    location: 'Ubud, Indonesia',
    reviews: '9,821 reviews',
    description: 'With the All-Inclusive Ubud Private Tour, you get a personalized itinerary focusing on your interests. Discover scenic spots, cultural locations, and a beautiful waterfall, while indulging in delicious local cuisine.',
    image: 'https://via.placeholder.com/150',
    duration: '8-10 hours',
    ageRange: 'Ages 1-99, max of 13 per group'
  },
  {
    id: 2,
    title: 'All-Inclusive Amsterdam Canal Cruise by Captain Jack',
    location: 'Amsterdam, The Netherlands',
    reviews: '5,632 reviews',
    description: 'Explore the beautiful canals of Amsterdam with Captain Jack. Enjoy informative commentary and delicious snacks while cruising through the historic waterways.',
    image: 'https://via.placeholder.com/150',
    duration: '2-3 hours',
    ageRange: 'Ages 5-90, max of 20 per group'
  },
  // Add more experiences as needed
];

const changeColor = keyframes`
  from {
    background-color: #3f51b5;
  }
  to {
    background-color: #1e88e5;
  }
`;

const AnimatedButton = styled(Button)`
  ${({ animate }) => animate && css`
    animation: ${changeColor} 1s alternate infinite;
  `}
`;

const ExperiencesPage = () => {
  const [selected, setSelected] = useState('Top Experiences');

  const handleButtonClick = (button) => {
    setSelected(button);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>Top Experiences</Typography>
        <Box display="flex" justifyContent="center" mb={4}>
          <Button variant="outlined" onClick={() => handleButtonClick('World')}>World</Button>
          <AnimatedButton
            variant="contained"
            color="primary"
            onClick={() => handleButtonClick('Top Experiences')}
            animate={selected === 'Top Experiences'}
            style={{ marginLeft: 8 }}
          >
            Top Experiences
          </AnimatedButton>
          <Button variant="outlined" onClick={() => handleButtonClick('Top Attractions')} style={{ marginLeft: 8 }}>Top Attractions</Button>
          <Button variant="outlined" onClick={() => handleButtonClick('Amusement & Water Parks')} style={{ marginLeft: 8 }}>Amusement & Water Parks</Button>
          <Button variant="outlined" onClick={() => handleButtonClick('Bucket List Experiences')} style={{ marginLeft: 8 }}>Bucket List Experiences</Button>
        </Box>
        <Grid container spacing={4}>
          {experiences.map(exp => (
            <Grid item xs={12} md={6} key={exp.id}>
              <Paper style={{ padding: 16 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Avatar variant="square" src={exp.image} style={{ width: '100%', height: '100%' }} />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6">{exp.title}</Typography>
                    <Box display="flex" alignItems="center" mb={1}>
                      <LocationOn fontSize="small" />
                      <Typography variant="body2" color="textSecondary" style={{ marginLeft: 4 }}>
                        {exp.location}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary">{exp.reviews}</Typography>
                    <Typography variant="body2" paragraph>{exp.description}</Typography>
                    <Button size="small">Read more</Button>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                      <Box>
                        <Typography variant="body2">Quick facts</Typography>
                        <Typography variant="body2" color="textSecondary">{exp.duration}</Typography>
                        <Typography variant="body2" color="textSecondary">{exp.ageRange}</Typography>
                      </Box>
                      <FavoriteBorder />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ExperiencesPage;

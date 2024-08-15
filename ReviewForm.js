import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Button, TextField } from '@mui/material';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    { user: 'Gokul', review: 'This is a fantastic place! Highly recommend visiting.' },
    { user: 'Dharun', review: 'Beautiful scenery and lots of activities to do. Loved it!' }
  ]);
  const [newReview, setNewReview] = useState('');

  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, { user: 'Anonymous', review: newReview }]);
      setNewReview('');
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Reviews</Typography>
        <Paper style={{ padding: 16 }}>
          {reviews.map((review, index) => (
            <Typography key={index} variant="body2" paragraph>
              <strong>{review.user}</strong><br />
              {review.review}
            </Typography>
          ))}
          <TextField
            label="Write a review"
            multiline
            rows={4}
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            fullWidth
            style={{ marginTop: 16 }}
          />
          <Button
            onClick={handleAddReview}
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
          >
            Submit Review
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default ReviewsPage;

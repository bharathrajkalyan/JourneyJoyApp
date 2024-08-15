import React from 'react';
import { useLocation } from 'react-router-dom';
import TourCard from './components/TourCard';

function SearchResults() {
  const location = useLocation();
  const { filteredTours } = location.state;

  return (
    <div>
      <h2>Search Results</h2>
      <div className="tour-cards-container">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour, index) => (
            <TourCard key={index} {...tour} className="tour-cards" />
          ))
        ) : (
          <p>No tours found</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;

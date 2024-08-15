// TourCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faClock, faUsers, faHeart, faVideo } from '@fortawesome/free-solid-svg-icons';
import './TourCard.css';

const TourCard = ({ image, title, location, price, duration, people, rating, featured }) => {
    return (
        <div className="tour-card">
            {featured && <div className="tour-card-featured">FEATURED</div>}
            <img src={image} alt={title} className="tour-card-image" />
            <div className="tour-card-content">
                <div className="tour-card-header">
                    <div className="tour-card-title">{title}</div>
                    <div className="tour-card-icons">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <div className="tour-card-location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                </div>
                <div className="tour-card-price">From ${price}</div>
                <div className="tour-card-details">
                    <div>
                        <FontAwesomeIcon icon={faClock} /> {duration} hours
                    </div>
                    
                    <div className="star-rating">
                        {Array(5).fill().map((_, i) => (
                            <FontAwesomeIcon
                                key={i}
                                icon={i < rating ? faStarSolid : faStarRegular}
                                className={i < rating ? 'filled-star' : 'unfilled-star'}
                            />
                        ))}
                        {/*<div>
                        {rating}
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;

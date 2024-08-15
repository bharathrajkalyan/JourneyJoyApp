import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Home.css';
import Card from './components/Card';
import TourCard from './components/TourCard';
import Destination from './Destination';
import AttractionPage from './Attraction';
import Footer from './components/Footer';

const tours = [
  {
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "New York City Skyline Helicopter Tour",
    location: "United States",
    price: 2000,
    duration: 1.5,
    ageRange: "12-70",
    liveGuide: "English",
    rating: 4.8,
    featured: true,
    category: "Adventure",
    description: "Experience breathtaking views of New York City from above with a thrilling helicopter tour. Fly over iconic landmarks like the Statue of Liberty, Central Park, and the Empire State Building."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Kruger National Park Safari",
    location: "South Africa",
    price: 1800,
    duration: 5,
    ageRange: "10-70",
    liveGuide: "English",
    rating: 4.9,
    featured: true,
    category: "Wildlife",
    description: "Embark on a classic safari adventure in Kruger National Park. Spot the Big Five and other wildlife while enjoying guided game drives in one of Africa's premier game reserves."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Barcelona Gaudí Architecture Tour",
    location: "Spain",
    price: 950,
    duration: 4,
    ageRange: "0-80",
    liveGuide: "Spanish, English",
    rating: 4.7,
    featured: false,
    category: "Sightseeing",
    description: "Discover the architectural marvels of Antoni Gaudí in Barcelona, including the Sagrada Família, Park Güell, and Casa Milà. Learn about the history and design of these iconic landmarks."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Queenstown Adventure Package",
    location: "New Zealand",
    price: 2200,
    duration: 4,
    ageRange: "18-65",
    liveGuide: "English",
    rating: 4.8,
    featured: true,
    category: "Adventure",
    description: "Experience the best of Queenstown's adventure sports with a package that includes bungee jumping, jet boating, and skydiving. Perfect for thrill-seekers looking for an adrenaline rush."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Sydney Harbour Cruise",
    location: "Australia",
    price: 700,
    duration: 2,
    ageRange: "0-80",
    liveGuide: "English",
    rating: 4.6,
    featured: false,
    category: "Sightseeing",
    description: "Enjoy a relaxing cruise around Sydney Harbour, taking in views of the Sydney Opera House, Harbour Bridge, and other iconic landmarks. Includes a commentary about the city's history and culture."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Cape Town Wine Tasting Tour",
    location: "South Africa",
    price: 850,
    duration: 6,
    ageRange: "21-70",
    liveGuide: "English",
    rating: 4.5,
    featured: false,
    category: "City Side",
    description: "Explore the world-renowned wine regions around Cape Town with a guided tour that includes visits to several top wineries and tastings of a variety of wines."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Vatican City Art Tour",
    location: "Italy",
    price: 1300,
    duration: 5,
    ageRange: "12-80",
    liveGuide: "English, Italian",
    rating: 4.8,
    featured: true,
    category: "Sightseeing",
    description: "Experience a guided tour of Vatican City's art treasures, including the Sistine Chapel, St. Peter's Basilica, and the Vatican Museums. Learn about the history and significance of these masterpieces."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Venice Gondola Ride",
    location: "Italy",
    price: 600,
    duration: 1,
    ageRange: "0-80",
    liveGuide: "Italian, English",
    rating: 4.7,
    featured: true,
    category: "Sightseeing",
    description: "Experience the charm of Venice from the water with a classic gondola ride through its picturesque canals. Enjoy a serene journey while taking in the city's historic architecture."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Amazon Rainforest Expedition",
    location: "Brazil",
    price: 2500,
    duration: 7,
    ageRange: "18-60",
    liveGuide: "Portuguese, English",
    rating: 4.9,
    featured: true,
    category: "Wildlife",
    description: "Discover the rich biodiversity of the Amazon Rainforest on this guided expedition. Spot exotic wildlife, explore dense jungle trails, and learn about the unique ecosystems of the rainforest."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Athens Historical Tour",
    location: "Greece",
    price: 850,
    duration: 4,
    ageRange: "0-70",
    liveGuide: "Greek, English",
    rating: 4.6,
    featured: false,
    category: "Sightseeing",
    description: "Explore the ancient wonders of Athens with a tour that includes the Acropolis, Parthenon, and the Temple of Olympian Zeus. Learn about Greece's rich history and mythology from expert guides."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Whistler Mountain Ski Adventure",
    location: "Canada",
    price: 1800,
    duration: 5,
    ageRange: "15-65",
    liveGuide: "English",
    rating: 4.8,
    featured: true,
    category: "Adventure",
    description: "Hit the slopes in Whistler with a ski adventure package that includes lift passes, equipment rental, and lessons. Enjoy some of the best skiing and snowboarding terrain in North America."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Marrakech Cultural Experience",
    location: "Morocco",
    price: 1200,
    duration: 3,
    ageRange: "0-80",
    liveGuide: "Arabic, French, English",
    rating: 4.5,
    featured: false,
    category: "City Side",
    description: "Immerse yourself in the vibrant culture of Marrakech with guided tours of the city's medina, souks, and historic palaces. Experience traditional Moroccan cuisine and craftsmanship."
},
{
    image: "/images/backgroundmt.jpg",
    image1: "/images/backgroundmt.jpg",
    image2: "/images/backgroundmt.jpg",
    title: "Budapest Thermal Bath Tour",
    location: "Hungary",
    price: 500,
    duration: 2,
    ageRange: "0-80",
    liveGuide: "Hungarian, English",
    rating: 4.7,
    featured: false,
    category: "Relaxation",
    description: "Relax and rejuvenate in Budapest's famous thermal baths with a guided tour that includes access to historic bathhouses like Széchenyi and Gellért. Enjoy the therapeutic properties of the thermal waters."
}

];

const data = [
  { image: '/images/moracoomain.jpg', title: 'Morocco', tours: 6, category: 'Sightseeing' },
  { image: './images/ukmain.jpg', title: 'United Kingdom', tours: 8, category: 'City Side' },
  { image: './images/singaporemain.jpg', title: 'Singapore', tours: 5, category: 'City Side' },
  { image: './images/hungurymain.jpg', title: 'Hungary', tours: 3, category: 'Forest' },
  { image: './images/southafricamain.jpg', title: 'South Africa', tours: 7, category: 'Sightseeing' },
  { image: './images/italymain.jpg', title: 'Italy', tours: 2, category: 'Adventure' },
  { image: './images/greecemain.jpg', title: 'Greece', tours: 2, category: 'Forest' },
  { image: './images/usmain.jpg', title: 'United States', tours: 9, category: 'Adventure' },
];

const activities = [
  "Adventure",
  "Wildlife",
  "Sightseeing",
  "City Side",
  "Relaxation"
];

function App() {
  const [destination, setDestination] = useState('');
  const [activity, setActivity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredTours, setFilteredTours] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'destination') setDestination(value);
    if (name === 'activity') setActivity(value);
    if (name === 'minPrice') setMinPrice(value);
    if (name === 'maxPrice') setMaxPrice(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    const filtered = tours.filter(tour => {
      const matchesDestination = destination ? tour.location.toLowerCase().includes(destination.toLowerCase()) : true;
      const matchesActivity = activity ? tour.category.toLowerCase().includes(activity.toLowerCase()) : true;
      const matchesMinPrice = minPrice ? tour.price >= parseFloat(minPrice) : true;
      const matchesMaxPrice = maxPrice ? tour.price <= parseFloat(maxPrice) : true;

      return matchesDestination && matchesActivity && matchesMinPrice && matchesMaxPrice;
    });

    setFilteredTours(filtered);
    setIsSearchPerformed(true);
  };

  const handleCancelSearch = () => {
    setDestination('');
    setActivity('');
    setMinPrice('');
    setMaxPrice('');
    setFilteredTours([]);
    setIsSearchPerformed(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="logo">ExploreEpic</div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tours">Tours Page</Link></li>
              <li><Link to="/trips">Trips</Link></li>
              <li><Link to="/attraction">Attraction</Link></li>
              <li><a href="#news">News</a></li>
              <li><a href="#pages">Pages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className='signup'>SignUp/Login</button>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="hero">
                    <h1>Let's explore</h1>
                    <h2>Where Would You Like To Go?</h2>
                    <p>Checkout Beautiful Places Around the World</p>
                    <form className="search-bar" onSubmit={handleSearch}>
                      <select className='bar' name="destination" value={destination} onChange={handleInputChange}>
                        <option value="" disabled>Select Destination</option>
                        {Array.from(new Set(tours.map(tour => tour.location))).map((location, index) => (
                          <option key={index} value={location}>{location}</option>
                        ))}
                      </select>
                      <select className='bar' name="activity" value={activity} onChange={handleInputChange}>
                        <option value="" disabled>Select Activity</option>
                        {activities.map((act, index) => (
                          <option key={index} value={act}>{act}</option>
                        ))}
                      </select>
                      <input className='bar'
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        value={minPrice}
                        min="1"
                        onChange={handleInputChange}
                      />
                      <input className='bar'
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={handleInputChange}
                      />
                      <button className='bar search' type="submit">Search</button>
                    </form>
                    <div className="cancelsearchdiv">
                      {isSearchPerformed ? (<button onClick={handleCancelSearch} className="cancelsearch">Cancel Search</button>) : (<div></div>)}
                    </div>
                  </section>
                  
                  {isSearchPerformed ? (
                    <section>
                      <h2 className="popular">Search Results</h2>
                      <div className="tour-cards-container">
                        {filteredTours.length > 0 ? (
                          filteredTours.map((tour, index) => (
                            <Link
                              key={index}
                              to={`/tour/${tour.title}`}
                              state={tour}
                              style={{ textDecoration: 'none' }}
                            >
                              <TourCard {...tour} className="tour-cards"/>
                            </Link>
                          ))
                        ) : (
                          <p>No tours found matching the search criteria.</p>
                        )}
                      </div>
                    </section>
                  ) : (
                    <>
                      <section>
                        <h2 className="popular">Go and Explore</h2>
                        <div className="card-container">
                          {data.map((item, index) => (
                            <Card
                              className="card"
                              key={index}
                              image={item.image}
                              title={item.title}
                              tours={item.tours}
                              link={`/destination/${item.title}`}
                            />
                          ))}
                        </div>
                      </section>
                      <hr />
                      <section>
                        <h2 className="popular">Top Tour Spots</h2>
                        <div className="tour-cards-container">
                          {tours.map((tour, index) => (
                            <Link
                              key={index}
                              to={`/tour/${tour.title}`}
                              state={tour}
                              style={{ textDecoration: 'none' }}
                            >
                              <TourCard {...tour} className="tour-cards"/>
                            </Link>
                          ))}
                        </div>
                      </section>
                    </>
                  )}
                </>
              }
            />
            <Route path="/trips" element={<Destination />} />
            <Route path="/attraction" element={<AttractionPage />} />
            
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

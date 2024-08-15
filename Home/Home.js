import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HomePage = () => {
  const navigate = useNavigate();

  function destinate() {
    navigate('/Destination');
  }
  function handleHome() {
    navigate('/Home');
  }

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">TravelNow</div>
        <ul className="nav-links">
          <li onClick={handleHome}>Home</li>
          <li>Most Visited</li>
          <li>Trips</li>
          <li>Contact</li>
          </ul>
          </header>
          <section className="hero-section">
          <video autoPlay loop muted className="hero-video">
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
        <h1 className='cur'>Travel far enough, you meet yourself</h1>
          <h1>Find your perfect destination</h1>
          <div className="search-bar">
            <input type="text" placeholder="Country or destination name" />
            <button>Search</button>
            </div>
        </div>
        </section>

        <section  className="featured-section">
        <h2 className='title'>To Travel is to Live</h2>
        
        <div onClick={destinate} className="featured-grid">
          <div className="card">
          <img src="/images/USA.jpg" alt="Ciri Biri Bela" />
          <h3>USA</h3>
          </div>
          <div className="card">
            <img src="/images/Canada.jpg" alt="Konoba Nikola" />
            <h3>Canada</h3>
          </div>
          <div className="card">
            <img src="images/France.jpg" alt="Otprilike ovako" />
            <h3>France</h3>
          </div>
          <div className="card">
            <img src="/images/Spain.jpg" alt="Santorini" />
            <h3>Spain</h3>
            </div>
          <div className="card">
            <img src="/images/Turkey.jpg" alt="Paris" />
            <h3>Turkey</h3>
          </div>
          <div className="card">
            <img src="/images/Singapore.jpg" alt="Rome" />
            <h3>Singapore</h3>
          </div>
          <div className="card">
          <img src="images/Australia.jpg" alt="Bali" />
            <h3>Australia</h3>
          </div>
          <div className="card">
            <img src="images/Japan.jpg" alt="Kyoto" />
            <h3>Japan</h3>
          </div>
          <div className="card">
            <img src="images/Italy.jpg" alt="New York" />
            <h3>Italy</h3>
          </div>
          <div className="card">
            <img src="images/China.jpg" alt="New York" />
            <h3>China</h3>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h3>Popular Destination</h3>
          <p>4.3 million Tourists visiting every year</p>
        </div>
        <div className="info-card">
        <h3>See the latest reviews</h3>
          <p>Millions of Tour Sights reviews and photos from our global travel community</p>
        </div>
        <div className="info-card">
          <h3>Reserve a table</h3>
          <p>Make online bookings at restaurants worldwide</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">TravelNow</div>
          <ul className="footer-links">
          <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <div className="social-icons">
            <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAeFBMVEX///8AgP/m7f8AcP8Aef8Ae/93p/8AdP/5/P+fwv8Aff+Qtv/u9v8Acv+myf+bxP/p8/9upP/J3//S5f/k8P/d6/8AbP/A2v+PvP+Etv+uzv9NkP8wh/9Ek/+Csf+40/8ui/8zj/9Vmf93rf9nnv9pqP8AZ/+1zP/EbL2KAAAEjklEQVR4nO2dfZOqIBSHlw3DyOzFTDPfUrv7/b/hzZo7u41ugnIQ7pzn73J6RkA4yK+PDwRBEARBEARBEARBEARBEARBEARBkG+8IEq28bmul5Op83O8TaLAm8ckjJtLmRJCOHcUwDkhaVpemm2oXSXJ+AOilOc1s0SniesTpljjRYkR39XlEmQLQJWHziILtKh4PqWwKi2U+hrGgl2+gFdpWeQ7cJelJpe7zRLYxlsyXS6EsCVsS1tr6C7f0DWki69TpcWHcwkujl4X5wI3QudaG1kLzaFcCgL8rOzCSQHj4q41jmT/YGuYic2h1H5j7remPIDIfM1wY+635gvCZVdr7/4t9AYxDwjnaGX3dpZCLNYOs7SyezsD6DSuv5lHZgOwUHPPM90ZelYv4+1n6f93mb36ubNXqZHhXLISQiv1Mrvr1MGMO5STtC0nXcoyTYlDHUfgmvyqfmw+ppNkOHXSal+vkigIj8cwiPy43ldZKfDN9KheZpoKac5F50d5QXQTaLzqZT4ndBmHLLsmT5LhkgL9VC8zfmSmWfJrsxd4em0AZEY/M+ntTTsRkFkAyIwtMbHbu4eeXTKsentZq2Qc8v6yNslwOvDEs0lmM1T4skiGZkPzKotk2GChyB4Zpxqcidgjw1aD6yprZHg6vHy3Robu37Yy1/V23nZ4ymeGDIv7W5kbXzllTwS2FcyQ4f37+fFJRMEwGV5GPdfx9rJrCSNknL69fPcsvcgzQ6bpKaxGpfTmmxEytOkOZm4sv/o2Q6ZnZA4ba2W60//DiIKVsTLFiBqPuTIjajzGyozZFzFVxl39R3cGZVAGZVAGZXTLOOwnp6ZH5g97xVgZ57Z9oeiWMw/x60dEVgTzyCzk3+E/nkyVGaySdykEGq81MrFAp7FGRmTn3BqZq7FFwBEyIqUaa2REnsS2yBz/J5nI3BmAvMxWpFhji4zQ28W2yFQiJUFbZFIBF1tkXKFarSUyocEy0kuAyGAZdg4OPwm7+7O7Q/BNGIu4zLVs5i/01gAWP0+aC7kYUtDoHrN0V9YWzvtk7KnOoAzKoAzKoAzKoAzKoEwPEIeBpH+GKhkGICP9PpIqGYAzZ0fpzAlFMhzgNOBO+rU3VTKp+kOn8idoVckAnKCVP9usSAbibLMnsmMHInNTLyOfB6BIhgHkAcgnNSiSgUhqkM/QUHVnIIJnpNNN1MjwEiLdRDp3Ro0MrUES22QTgdTIwCQCfQSS7UyJDC9hEs5kU7SUyEClaMmefVEh4/SejlKCXLyhChnAiMMgk7k1CmR6T3qpQipIb7oMWIjeE5lTVtNlaAzp8uHm4jO0yTKbHDjo2MsFXhFVI3PKwXOBvVjUZqLMKdaQcewWTKzjTJKhrNATpv1ZbUSG6AkyzqZSX1/6jeIikFA2VuZ+6QvokNzV2ZeEtwH4vztJy/A2lJ+Tcq9XpeXo1012SdNHClsfi27+nbs69X6UUufxtwDXrKl9/f8L8Pxt4aFI/FW87iX/6nRhN8r7P7texys/Kfpet0EQBEEQBEEQBEEQBEEQBEEQBEEQRJK/hBJsyChI+kAAAAAASUVORK5CYII=" alt="Facebook" /></a>
            <a href="#"><img src="data:image/png;base64,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" alt="Twitter" /></a>
            <a href="#"><img src="data:image/jpeg;base64,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" alt="Instagram" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

          //<Button className='signup'>Signup/Login</Button>
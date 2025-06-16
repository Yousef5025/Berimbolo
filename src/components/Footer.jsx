import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <div className="row">

            <div className="col-md-4 mb-3">
              <h5>About Us</h5>
              <p>
                Berimbolo Company offers the best value for price with over
                25 years of expertise. Discover our products gallery and best
                service.
              </p>
            </div>
  
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#main" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#about" className="text-white text-decoration-none">About Us</a></li>
                <li><a href="#offers" className="text-white text-decoration-none">offers</a></li>
                <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>
  
            <div className="col-md-4 mb-3">
              <h5>Contact</h5>
              <p>
                <i className="fa-solid fa-location-dot text-warning me-2"></i>
                company Adress
              </p>
              <p>
                <i className="fa-solid fa-phone text-warning me-2"></i>
                123456789
              </p>
              <p>
                <i className="fa-regular fa-envelope text-warning me-2"></i>
                support@Berimbolo .com
              </p>
            </div>
          </div>
          <hr className="text-white" />
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Berimbolo Company. All Rights Reserved.
          </p>
        </div>
      </footer>
  );
}

export default Footer;

  
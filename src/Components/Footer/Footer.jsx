import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12">
            <h1>LeaseEase</h1>
            <p>
              Discover seamless tenant management with our user-friendly
              website. Streamline leasing processes, track payments, and enhance
              communication effortlessly. Trust our platform for efficient
              property management.
            </p>
            <div className="footer-icon">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <h1>Quick Links</h1>
            <div className="nav-item">
              <a href="">Home</a>
            </div>
            <div className="nav-item">
              <a href="">Properties</a>
            </div>
            <div className="nav-item">
              <a href="">Contact</a>
            </div>
            <div className="nav-item">
              <a href="">About Us</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <h1>Contact Info</h1>
            <div className="contact-info">
              <i class="fa-solid fa-phone"></i>
              <span>+9867533510</span>
            </div>
            <div  className="contact-info">
              <i class="fa-solid fa-envelope"></i>
              <span>leaseease@gmail.com</span>
            </div>
            <div  className="contact-info">
              <i class="fa-solid fa-location-dot"></i>
              <span>Ahmedabad,Gujarat</span>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <i class="fa-solid fa-copyright"></i><span>Copyright reserved by LeaseEase</span>
        </div>
    </div>
  );
};

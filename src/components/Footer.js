import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div class="footer-phone-hours">
            <span class="phone">
                (347)418-6331
            </span>

            <span class="hours">
                8:00 am - 3:00 pm
            </span>
        </div>

        <div class="page-links">
            <div class="home-link">
                <a href="index.html">Home</a>
            </div>
            
            <div class="shop-link">
                <a href="menu.html">Shop</a>
            </div>

            <div class="contact-link">
                <a href="contact.html">Contact</a>
            </div>
        </div>

        <div class="social-media-icons-wrapper">
            <a href="#">
                <i class="fab fa-instagram"></i>
            </a>

            <a href="#">
                <i class="fab fa-twitter"></i>
            </a>

            <a href="#">
                <i class="fab fa-facebook-f"></i>
            </a>
        </div>

        <div class="copyright-wrapper">
            &copy; 2021 Future Technology &#124; All rights reserved
        </div>
      </div>
    );
  }
}

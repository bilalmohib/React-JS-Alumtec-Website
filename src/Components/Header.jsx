import React, { useEffect } from 'react';

import '../Styling/Header.css';

import Logo from '../UI/logo.JPEG XR';


import { Link } from "react-router-dom"

const Header = () => {
  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {

      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame;

      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {

        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {

          // Call our function and pass any params we received
          fn(...params);
        });

      }
    };


    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();
  })
  return (
    <div>

      {/* Navbar */}
      <nav style={{ borderBottom: "0.5px solid #0275d8" }} className="navbar navbar-expand-lg navbar-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Navbar brand */}
          <Link to="/" className="navbar-brand">
            <img className="logo" src={Logo} alt="Alum tech" />
          </Link>
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">OUR PRODUCTS</Link>
              </li>
              <li className="nav-item">
                <Link to="/health" className="nav-link">HEALTH & SAFETY</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  CAREER
              </a>
                {/* Dropdown menu */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/career" className="dropdown-item">CAREER</Link></li>
                  <li>
                    <Link to="/admin" className="dropdown-item" href="#">ADMIN</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">CONTACT US</Link>
              </li>
              {/* Navbar dropdown */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  PROJECTS
                </a>
               
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Completed</a></li>
                  <li><a className="dropdown-item" href="#">Ongoing</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">FACTORY GALLERY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">CAREER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">QUALITY POLICY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">CONTACT US</a>
              </li>*/}
            </ul>
            {/* Left links */}

          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </div>
  )
}
export default Header;
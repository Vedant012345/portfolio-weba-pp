import React, { useState } from 'react';
import logo from '../../public/vedant2.png';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navItems = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Portfolio", to: "portfolio" },
    { id: 4, text: "Experience", to: "experience" },
    { id: 5, text: "Contact", to: "contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid container mx-auto px-4 md:px-20 py-20">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="hi" width="50" height="50" className='nav-logo' />
        </a>
        <a className="navbar-brand" href="/">Vedant Pawar</a>
        <button className={`navbar-toggler ${menu ? 'collapsed' : ''}`} type="button" aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menu ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map(item => (
              <li className="nav-item" key={item.id}>
                <Link
                  className="nav-link"
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={() => setMenu(false)} // Close menu on click
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <form className={`d-lg-flex flex-row ${menu ? 'd-none' : 'd-flex'}`}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

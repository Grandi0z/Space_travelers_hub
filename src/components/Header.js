import React from 'react';
import { Link } from 'react-router-dom';
import log from '../images/logo.png';

const Header = () => (
  <div className="header-container">
    <div className="header-item">
      <Link className="nav-link mt-1" to="/">
        <img className="logo" src={log} alt="logo" />
        <span className="logo-text"> Space Travelers&apos; Hub </span>
      </Link>
    </div>
    <div className="header-item">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/"> Rockets</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/missions">Missions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/my-profile">My Profile</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;

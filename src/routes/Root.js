import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Root = () => (
  <div>
    <header>
      <h1>Space Travelers&apos  Hub</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile">
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <Outlet />
    </div>
  </div>
);

export default Root;

import React from "react";
import { Outlet, NavLink } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <header>
        <h1>Space Travelers'  Hub</h1>
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
};

export default Root;

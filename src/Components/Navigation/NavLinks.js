import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/open-shifts">Open Shifts</NavLink>
      </li>
      <li>
        <NavLink to="/schedule">Schedule</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

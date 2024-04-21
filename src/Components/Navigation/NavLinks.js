import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/open-shifts">OPEN SHIFTS</NavLink>
      </li>
      <li>
        <NavLink to="/schedule">SCHEDULE</NavLink>
      </li>
      <li>
        <NavLink to="/salary">SALARY</NavLink>
      </li>
      <li>
        <NavLink to="/profile">PROFILE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

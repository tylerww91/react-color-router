import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header-nav">
      <p>
        <NavLink to={`/RGB/92/109/112`}>Cadet</NavLink>
      </p>
      <p>
        <NavLink to={`/RGB/163/119/116`}>Burnished Brown</NavLink>
      </p>
      <p>
        <NavLink to={`/RGB/232/136/115`}>Middle Red</NavLink>
      </p>
    </header>
  );
}

import React, { useState } from "react";
import { useLocation, useRouteLoaderData } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';

function Navigation(){


  return(
    <nav className="">
      <div>
        <img className="" src="" alt=""/>
      </div>
      <ul className="navigation__menu">
        <li className="navigation__menu-list">
          <NavLink className="navigation__menu-item" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="navigation__menu-item" to="/blue-coats">Blue Coats</NavLink>
        </li>
        <li>
          <NavLink className="navigation__menu-item" to="/asterix">Asterix</NavLink>
        </li>
        <li>
          <NavLink className="navigation__menu-item" to="/tintin">Tintin</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
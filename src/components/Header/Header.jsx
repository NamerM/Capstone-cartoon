import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';


function Header (
  { isLoggedIn,
  }
){

const location = useLocation();
const isBlueCoats = location.pathname === '/blue-coats';
const isAsterix = location.pathname === '/asterix';
const isTintin = location.pathname === '/tintin';

const classBlueCoats = isBlueCoats ? "header__bluecoats" : "header__login";
const classAsterix = isAsterix ? "header__asterix" : "header__login";
const classTintin = isTintin ? "header__tintin" : "header__login";



  return (
    <header className="header">
      { isLoggedIn ? 

        (<section className={`${classBlueCoats} | ${classAsterix} | ${classTintin}`}>
          <Navigation
            isLoggedIn={isLoggedIn}
          />
        </section>
        ) 
        
        :
        (<section className="header__nologin">
          <Navigation
            isLoggedIn={isLoggedIn}
          />
        </section>)
      }
    </header>
  )
}
export default Header;
import React from 'react';
import {useLocation} from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';


function Header (
  isLoggedIn,
){

const location = useLocation();
const isBlueCoats = location.pathname === '/blue-coats';
const isAsterix = location.pathname === '/asterix';
const isTintin = location.pathname === '/tintin';


  return (
    <header className="header">
      { isLoggedIn ? 
        (<section className="header__login">
          <Navigation
            isLoggedIn={isLoggedIn}
          />
        </section>
        ) :
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
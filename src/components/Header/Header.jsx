import React from 'react';
import {useLocation} from 'react-dom';
import './Header.css';


function Header (
  isLoggedIn,
){



  return (
    <header className="header">
      { !isLoggedIn ? 
        (<section className="header__login">
          <p>LoggedIn</p>
        </section>) :
        (<section className="header__nologin">
          <p>Not Logged In</p>
        </section>)
      }
    </header>
  )
}
export default Header;
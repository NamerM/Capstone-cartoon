import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';



function Infobox({
  isLoggedIn,
}) {

const location = useLocation();
const isBlueCoats = location.pathname === '/blue-coats';
const isAsterix = location.pathname === '/asterix';
const isTintin = location.pathname === '/tintin';
const isMainContent = isBlueCoats || isAsterix || isTintin;

/* parent yapıp diğerlerinin almasını sağlayacağım */ 

  return(
    <>
    { isMainContent ?
    ( <section className="infobox">
        <div className="infobox__content">
          <img className="infobox__image" alt="image"/>
        </div>
  
    </section>) :
    (<></>)
    }
    </>
  )
}

export default Infobox;

import react, {useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header';
import Infobox from '../Infobox/Infobox';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (
    <div className="App">
        <Header 
          isLoggedIn={isLoggedIn}
        />
        <Infobox
          isLoggedIn={isLoggedIn}
        />
      
    </div>
  );
}

export default App;

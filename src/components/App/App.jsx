
import react, {useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
        <Header 
          isLoggedIn={isLoggedIn}
        />
        {/* <InfoBox /> */}
      
    </div>
  );
}

export default App;

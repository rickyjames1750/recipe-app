import React,{ useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = "c21c1abe";
  const APP_KEY = "57187b2ead30d513f516c237b4d5c887";
 const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
  }, []);

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;

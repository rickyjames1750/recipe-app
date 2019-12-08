import React from 'react';
import './App.css';

const app = () => {

  const APP_ID = "c21c1abe"
  const APP_KEY = "57187b2ead30d513f516c237b4d5c887"

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text">
          <button className="search-button" type="submit">Search</button>
        </input>
      </form>
      <h1>Hello React</h1>
    </div>
  )
}

export default App;

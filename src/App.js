import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "cbc672ab";
  const APP_KEY = "7c4b13d4370fd8c8415af5c2eed1b1c7";

  useEffect( () =>{
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return(
    <div className="App">
      {/*Create Form */}
      <h1>Hello React</h1>
      <form className="search-form" action="">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      
    </div>
  );
}

export default App;

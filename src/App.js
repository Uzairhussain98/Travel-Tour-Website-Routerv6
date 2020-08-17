import React from 'react';
import './App.css';
import HideOnScroll from './components/Header/Header';
import GridOne from './components/GridOne/GridOne';
import Home from './components/Home/Home';




function App() {
  return (
    <div>
       <HideOnScroll/> 
       <Home/>
       <GridOne/>

      
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, useLocation, useNavigate } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Home from './components/homepage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

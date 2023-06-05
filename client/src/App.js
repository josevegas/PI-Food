import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, useLocation, useNavigate } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Home from './components/homepage/HomePage';
import FormPage from './components/formpage/FormPage';
import Details from './components/detailpage/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/recipes' component={FormPage}/>
          <Route path='/detail/:id' component={Details}/>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

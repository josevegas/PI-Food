import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, useLocation, useNavigate } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Home from './components/homepage/HomePage';
import FormPage from './components/formpage/FormPage';
import DetailPage from './components/detailpage/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/recipe' component={FormPage}/>
          <Route path='/detail' component={DetailPage}/>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';

import NavBar from './Components/NavBar';
import { BrowserRouter  , Switch, Route } from "react-router-dom";
// import Switch fr
import Home from './Components/Home';
import Aboutme from './Components/Aboutme'
import Projects from './Components/Projects'
import Back from './Components/Back';

function App() {
  return (
    <div className="App">
      <Back/>

      <BrowserRouter>
             <NavBar/>
               <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/aboutme' component={Aboutme}/>
               <Route path='/projects' component={Projects}/>
               </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

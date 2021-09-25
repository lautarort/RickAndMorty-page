import './App.css';
import React from "react";
import { Route} from "react-router-dom";
import LandingPage from "./components/LandingPage.js"
import Home from "./components/Home.js"
import NavBar from "./components/NavBar.js"
import Character from './components/Character';
import Form from './components/Form';



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={NavBar}/>
      <Route exact path="/home" component={Home}/>
      <Route  path="/character/:id" component={Character}/>
      <Route  path="/home/create" component={Form}/>
      
    </div>
  );
}

export default App;

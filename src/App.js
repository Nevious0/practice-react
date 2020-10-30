import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home"
import Footer from "./components/Footer"
import './App.css';

const App =() => {
  return (
    <div className="App">
      <div className="content-wrap">
    <Router>
      <Nav/>
      <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    </Router>
    </div>
    <Footer/>
    </div>
  );
}


export default App;

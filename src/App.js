import React, { Component } from "react";
import moment from "moment";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog'; 
import PortfolioDetail from './portfolio/portfolio-detail'
export default class App extends Component {
  render() {
    return (
      <div className="app">


        <Router>
          <div>
          <h1>Adrian Blanco Portfolio</h1>
          <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <NavigationContainer />

            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about-me" element={<About/>} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/blog" element={<Blog/>} />
              <Route path="/portfolio/:permalink" element={<PortfolioDetail/>} />
            </Routes>
          </div>
        </Router>


      </div>      
    );
  }
}


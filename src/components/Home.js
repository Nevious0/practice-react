import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home-page">
          <h1>Hello and welcome.</h1>
          <h2>My name is<span> Nevious Ndlovu</span></h2>
          <h3>I am a Web Developer</h3>
          </div>
          <div className="home-item">
          <div className="languages">

              <div className="web-dev">
              <div className="icon-1">
          <i className="fab fa-html5"></i>
              </div>
              <h3>HTML</h3>
              </div>

           <div className="web-dev">
              <div className="icon-2">
          <i class="fab fa-css3-alt"></i>
              </div>
              <h3>CSS</h3>
              </div>

              <div className="web-dev">
              <div className="icon-3">
          <i className="fab fa-js-square"></i>
              </div>
              <h3>JAVASCRIPT</h3>
              </div>

              <div className="web-dev">
              <div className="icon-4">
              <i className="fab fa-react"></i>
              </div>
              <h3>REACT JS</h3>
              </div>

              <div className="web-dev">
              <div className="icon-5">
          <i className="fab fa-node-js"></i>
              </div>
              <h3>NODE JS</h3>
              </div>
          </div>
          </div>
     
          <div className="about-me">
              <div className="about">
                  <h3>About Me</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>
              <div className="myJourney">
                <h3>My Journey</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>
          </div>
        </div>
    )
}

export default Home

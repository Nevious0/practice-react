import React from 'react'
import './Contact.css'
import nevie from '../../nevie.jpg'

const Contact = () => {
    return (
        <div className="nav-contact">
          <div className="myContact">
              <div className="person-1">
                  <img className="logo" src={nevie} alt=""/>
                  <h2 className="name"><i className="fas fa-user"></i> Nevious Ndlovu</h2>
                  <h3 className="web">Web Development</h3>

                  <div className="social">
                      <i className="fab fa-facebook-square"></i>
                      <i className="fab fa-instagram-square"></i>
                      <i className="fab fa-twitter-square"></i>
                  </div>

                  <h2>Address</h2>
                  <h3><i className="fas fa-map-maker-alt"></i>JHB Midrand</h3>
                  <h4 className="email"><i className="fas fa-envelope-open"></i> neviousndlovu@gmail.com</h4>
                  <button className="btn">Email Me</button>
              </div>
               </div>
        
          </div>
            
       
    )
}

export default Contact

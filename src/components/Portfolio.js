import React from 'react'
import './Portfolio.css'
import carlo from '../img/carlo.jpg'
import iconcom from '../img/iconcom.jpg'
import jonathan from '../img/jonathan.jpg'
import kristina from '../img/kristina.jpg'
import pixabay from '../img/pixabay.jpg'
import sebastian from '../img/sebastian.jpg'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>This is my portfolio</h1>

            <div className="my-portfolio">
            <div className="first">
                <img src={carlo} alt=""/>
                <div className="info">
                <h2>Carlo</h2>
                <h2 className="price">R250</h2>
                <p>It is a long established fact that a reader will be distracted by the readable. </p>
                </div>
            </div>

            <div className="second">
            <img src={iconcom} alt=""/>
            <div className="info">
            <h2>Iconcom</h2>
            <h2 className="price">R275</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
           </div>

            <div className="third">
                <img src={jonathan} alt=""/>
                <div className="info">
            <h2>Jonathan</h2>
            <h2 className="price">R285</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div> 
            </div>

            <div className="forth">
                <img src={kristina} alt=""/>
                <div className="info">
            <h2>Kristina</h2>
            <h2 className="price">R305</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            </div>

            <div className="fifth">
                <img src={pixabay} alt=""/>
                <div className="info">
            <h2>Pixabay</h2>
            <h2 className="price">R200</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            </div>

            <div className="sixth">
                <img src={sebastian} alt=""/>
                <div className="info">
            <h2>Sebastian</h2>
            <h2 className="price">R200</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            </div>
            </div>
          
        </div>
    )
}

export default Portfolio

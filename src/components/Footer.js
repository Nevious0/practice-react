import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
    <div className="main-footer">
        <div className="row">
            <div className="col">
                <h4>Mashota</h4>
                <ul className="list-unstyled">
                    <li>071-343-5437</li>
                    <li>South Africa</li>
                    <li>JHB Midrand</li>
                </ul>
            </div>

            <div>
                <div className="col">
        <h4>Web Design</h4>
        <ul className="list-unstyled">
        <li>Other stuff</li>
        <li>Johannesburg</li>
        <li>PVT limited</li>
        </ul>
     </div>
     </div>

     <div className="col">
         <h4>Web Development</h4>
        <ul className="list-unstyled">
            <li>Programming</li>
            <li>Coding</li>
            <li>Front end & Back end</li>
        </ul>
     </div>

        </div>
    </div>
    )
}

export default Footer

import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container1">
                <h1 className="footer_title">Ajeeth</h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer_link">Projects</a>
                    </li>
                </ul>

                <div className="footer_social">

                    <a href="https://www.instagram.com/ajeeth_2001/" className="footer_social-link" >
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.youtube.com/@ajeeexploring5474" className="footer_social-link">
                        <i className="bx bxl-youtube"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/ajeeth2001" className="footer_social-link">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className='footer_copy'>&#169; Ajeeth. All rights reserved</span>
            </div>
        </footer>
    )
}

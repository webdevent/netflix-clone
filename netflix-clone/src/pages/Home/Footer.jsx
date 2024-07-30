import React from "react";
import './Footer.css'

function Footer(){

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 footer-left">
                        <p><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></p>
                        </div>
                        <div className="footer-link-content">
                            <ul className="footer-list">
                                <li>Audio Description</li>
                                <li>Gift Cards</li>
                                <li>Investor Relations</li>
                                <li>Terms of Use</li>
                                <li>Legal Notices</li>
                                <li>Corporate Information</li>
                                <li>Help Center</li>
                                <li>Media Center</li>
                                <li>Jobs</li>
                                <li>Privacy</li>
                                <li>Cookie Preferences</li>
                                <li>Contact Us</li>
                            </ul>
                            <div className="lower-footer">
                            <p>&copy; 1998 - 2024 Netflix Inc</p>
                            </div>
                            <div className="footer-right">
                                <p>Design by <a href="https://webdevent.github.io/Portfolio/" target="_blank"><strong>Webdevent</strong></a></p>
                            </div>
                        </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
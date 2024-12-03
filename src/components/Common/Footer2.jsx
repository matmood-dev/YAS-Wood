import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bnr = require('./../../images/background/f-bg.jpg');

class Footer2 extends React.Component {
    render() {

        return (
            <>
                <footer className="site-footer footer-large footer-dark footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper bg-cover" style={{backgroundImage:"url(" + bnr + ")"}}>
                        <div className="overlay-main sx-bg-secondry opacity-08" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"/"}>
                                                <img src={require('./../../images/logo-light.png')} alt="Inteshape" />
                                            </NavLink>
                                        </div>
                                        <p>Crafting Quality, One Piece at a Time.</p>
                                        <ul className="social-icons  sx-social-links">
                                            {/* <li><a href="https://www.behance.net/" className="fa fa-behance" target="_blank"></a></li>
                                            <li><a href="https://www.facebook.com" className="fa fa-facebook" target="_blank"></a></li>
                                            <li><a href="https://twitter.com" className="fa fa-twitter" target="_blank"></a></li> */}
                                            <li><a href="https://www.instagram.com/yaswoodofficial" className="fa fa-instagram" target="_blank"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Useful links</h5>
                                        <ul>
                                            <li><NavLink to={"/about-2"}>About</NavLink></li>
                                            <li><a href={"/samples/collection2023-2025/"}>Collection</a></li>
                                            <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* CONTACT US */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h5 className="widget-title">Contact Us</h5>
                                        <ul className="widget_address">
                                            <li>Avenue 17, Al Hidd</li>
                                            <li>info@yas-wood.com</li>
                                            <li>(+973) 1755 5095</li>
                                            <li>(+973) 3888 9284</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="sx-footer-bot-left">
                                    <span className="copyrights-text">© 2024 YAS Wood. All rights reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher />
            </>
        );
    };
};

export default Footer2;
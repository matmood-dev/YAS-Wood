import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

var bgimg1 = require('./../../images/video-bg.jpg');

class About3 extends React.Component {
    render() {
        return (
            <>
                <div className={`${this.props.bgcolor} section-full mobile-page-padding p-t80 p-b50`}>
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-home-3 m-b30 bg-white">
                                        <h3 className="m-t0 m-b20 sx-tilte">An innovative team crafting exceptional wood products.</h3>
                                        <p>YAS WOOD designs and manufactures faced panels and components for furniture. For over Sixteen years this YAS run business and its employees have applied passion and tenacity to researching and creating the best surfaces on the market.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                            <div className="overlay-main bg-black opacity-04" />
                                            <div className="video-section-inner">
                                                <div className="video-section-content">
                                                    

                                                    <div className="video-section-bottom">
                                                        <h3 className="sx-title text-white">16 Years<br />Experience</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/34741214' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About3;
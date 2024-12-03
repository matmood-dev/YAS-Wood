import React from 'react';
import Banner from '../../Elements/Banner';
import Footer2 from '../../Common/Footer2';

var bnrimg = require('./../../../images/banner/6.jpg');

class shelteroak298016tx04 extends React.Component {
    
   
    render() {
        return (
            <>
                <div className="page-content">
                    <Banner title="SHELTER OAK 298016 TX04" pagename="SHELTER OAK 298016 TX04" description="" bgimage={bnrimg} />

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding stick_in_parent">
                        <div className="container">
                            <div className="row">
                                <center>
                                <div className="col-lg-5 col-md-5 ">
                                    <div className="project-detail-outer">
                                        <div className="project-detail-pic m-b30">
                                            <div className="sx-media">
                                                <img src={require('./../../../images/projects/portrait/full/SHELTER OAK 298016 TX04.jpg')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </center>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <Footer2 />
            </>
        );
    };
};

export default shelteroak298016tx04;
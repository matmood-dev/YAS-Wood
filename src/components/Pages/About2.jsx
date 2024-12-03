import React from 'react';
import Header4 from './../Common/Header4';
import Footer2 from './../Common/Footer2';
import Banner from './../Elements/Banner';
import About3 from '../Elements/About3';

var bnrimg = require('./../../images/banner/6.jpg');

class Home4 extends React.Component {
    // componentDidMount() {
    //     function loadScript(src) {

    //         return new Promise(function (resolve, reject) {
    //             var script = document.createElement('script');
    //             script.src = src;
    //             script.addEventListener('load', function () {
    //                 resolve();
    //             });
    //             script.addEventListener('error', function (e) {
    //                 reject(e);
    //             });
    //             document.body.appendChild(script);
    //             document.body.removeChild(script);
    //         })
    //     };

    //     loadScript('./assets/js/custom.js');

    // };
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="About YAS Wood" pagename="About" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    
                </div>
                <About3 />
                <Footer2 />
            </>
        );
    };
};

export default Home4;
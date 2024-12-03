import React from 'react';
import Header4 from './../Common/Header4';
import Footer2 from './../Common/Footer2';
import Slider6 from './../Elements/Slider6';

class Home6 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Slider6 />
                </div>

                <Footer2 />
            </>
        );
    };
};

export default Home6;
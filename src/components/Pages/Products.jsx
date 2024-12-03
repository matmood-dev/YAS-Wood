import React from 'react';
import Header4 from './../Common/Header4';
import Footer2 from './../Common/Footer2';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/7.jpg');

class Products extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Products" pagename="Products" description="" bgimage={bnrimg}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-t80 p-b80 inner-page-padding">
                        <div className="container">
                            <div className="faq-1">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="sx-separator-outer separator-left">
                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                            <h3 className="sep-line-one">Products</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                <div className="row">
                                    <div className="col-md-6 faq-list">
                                        {/* Accordian */}
                                        <div>
                                            <h4>Acrylic High Gloss Surface</h4>
                                            <p>High Gloss acrlic laminate that enhance the brilliance of surfaces dedicated to interior
                                            design. Its exceptional optical depth makes it the best alternative to high-end lacquers.</p>
                                        </div>
                                        <div>
                                            <h4>The best applications</h4>
                                            <p>YAS WOOD is the ideal partner to design every environment with. Our furnishing solutionsand living area, doors, shelves, tops. In offices, doors, tops, shelves, partitions. In shops and fittings, doors, shelves, partitions.</p>
                                        </div>
                                        <div>
                                            <h4>Unique creations</h4>
                                            <p>Panels are available with different substrates, sizes and thicknesses, matching edges and workable with machines and woodworking tools.</p>
                                        </div>
                                        <div>
                                            <h4>Benefits</h4>
                                            <p>- High GlossEasy to process</p>
                                            <p>- Low VOCs emissions</p>
                                            <p>- Easy to clean</p>
                                            <p>- Wide range of colors</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        {/* Accordian */}
                                        <div className="sx-accordion acc-bg-gray" id="accordion5">
                                        <div>
                                            <h4>THERMOLAMINATES</h4>
                                            <h4>PET</h4>
                                            <p>PET surface is a versatile, durable and sustainable choice for many furniture applications. Respecting the environment PET is the surface that enhances the aesthetic and mechanical characteristics in modernfurniture. Laminated on MDF support, the panels are covered on both sides with the same surface of super matt pet, giving life to a sustainable and contemporary product with a refined appeal.</p>
                                        </div>
                                        <div>
                                            <h4>The eco-friendly thermolaminate</h4>
                                            <p>It is a thermolaminated material based on polyethylene terephthalate (PET), with very high resistance to UV rays, scratches and chemical agents. It is available in 7 selected colors both glossy and in super matt anti-fingerprint.</p>
                                        </div>
                                        <div>
                                            <h4>Sustainable ethics</h4>
                                            <p>PET composition is free of halogens, heavy metals and is PVC free. The surface is produced using a part of recycled plastic materials, contributing ethically to the protection of the planet.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer2 />
            </>
        );
    };
};

export default Products;
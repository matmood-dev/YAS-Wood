import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer2 from './../Common/Footer2';
import Banner from './../Elements/Banner';

const projects = [
    {
        image: require('./../../images/projects/portrait/abiskoash30181tx04.jpg'),
        title: 'ABISKO ASH',
        address: '30181 TX04',
        imageLink: 'abiskoash30181tx04'
    },
    {
        image: require('./../../images/projects/portrait/agostinooak13833tx04.jpg'),
        title: 'AGOSTINO OAK',
        address: '13833 TX04',
        imageLink: 'agostinooak13833tx04'
    },
    {
        image: require('./../../images/projects/portrait/callahan109037tx04.jpg'),
        title: 'CALLAHAN',
        address: '109037 TX04',
        imageLink: 'callahan109037tx04'
    },
    {
        image: require('./../../images/projects/portrait/callahan109039tx04.jpg'),
        title: 'CALLAHAN',
        address: '109039 TX04',
        imageLink: 'callahan109039tx04'
    },
    {
        image: require('./../../images/projects/portrait/celestineoak32374tx04.jpg'),
        title: 'CELESTINE OAK',
        address: '32374 TX04',
        imageLink: 'celestineoak32374tx04'
    },
    {
        image: require('./../../images/projects/portrait/cementoserra99063tx03.jpg'),
        title: 'CEMENTO SERRA',
        address: '99063 TX03',
        imageLink: 'cementoserra99063tx03'
    },
    {
        image: require('./../../images/projects/portrait/fribourgoak13840tx04.jpg'),
        title: 'FRIBOURG OAK',
        address: '13840 TX04',
        imageLink: 'fribourgoak13840tx04'
    },
    {
        image: require('./../../images/projects/portrait/beigess6552tx01.jpg'),
        title: 'BEIGE',
        address: 'SS6552 TX01',
        imageLink: 'anthracite12146tx04'
    },
    {
        image: require('./../../images/projects/portrait/black-ss6565.jpg'),
        title: 'Black',
        address: 'SS6565',
        imageLink: 'black-ss6565'
    },
    {
        image: require('./../../images/projects/portrait/breraeu07b1-007tx05.jpg'),
        title: 'BRERA',
        address: 'EU07B1-007 TX05',
        imageLink: 'breraeu07b1-007tx05'
    },
    {
        image: require('./../../images/projects/portrait/charcoal.jpg'),
        title: 'CHARCOAL',
        address: '',
        imageLink: 'charcoal'
    },
    {
        image: require('./../../images/projects/portrait/cirrusss6519tx01.jpg'),
        title: 'CIRRUS',
        address: 'SS6519 TX01',
        imageLink: 'cirrusss6519tx01'
    },
    {
        image: require('./../../images/projects/portrait/clay-grey-13600.jpg'),
        title: 'Clay Grey',
        address: '13600',
        imageLink: 'clay-grey-13600'
    },
    {
        image: require('./../../images/projects/portrait/creamss6017tx01.jpg'),
        title: 'CREAM',
        address: 'SS6017 TX01',
        imageLink: 'creamss6017tx01'
    },
    {
        image: require('./../../images/projects/portrait/darkgreyss6577tx01.jpg'),
        title: 'DARK GREY',
        address: 'SS6577 TX01',
        imageLink: 'darkgreyss6577tx01'
    },
    {
        image: require('./../../images/projects/portrait/eskimoss1502.jpg'),
        title: 'Eskimo',
        address: 'SS1502',
        imageLink: 'eskimoss1502'
    },
    {
        image: require('./../../images/projects/portrait/granolass6033.jpg'),
        title: 'Granola',
        address: 'SS6033',
        imageLink: 'granolass6033'
    },
    {
        image: require('./../../images/projects/portrait/graphitegrey12146tx03.jpg'),
        title: 'GRAPHITE GREY',
        address: '12146 TX03',
        imageLink: 'graphitegrey12146tx03'
    },
    {
        image: require('./../../images/projects/portrait/graphitegrey12146tx04.jpg'),
        title: 'GRAPHITE GREY',
        address: '12146 TX04',
        imageLink: 'graphitegrey12146tx04'
    },
    {
        image: require('./../../images/projects/portrait/historyparlor18100tx03.jpg'),
        title: 'HISTORY PARLOR',
        address: '18100 TX03',
        imageLink: 'historyparlor18100tx03'
    },
    {
        image: require('./../../images/projects/portrait/kaiserwalnut102019tx04.jpg'),
        title: 'KAISER WALNUT',
        address: '102019 TX04',
        imageLink: 'kaiserwalnut102019tx04'
    },
    {
        image: require('./../../images/projects/portrait/lightgrey12147tx03.jpg'),
        title: 'LIGHT GREY',
        address: '12147 TX03',
        imageLink: 'lightgrey12147tx03'
    },
    {
        image: require('./../../images/projects/portrait/lightgrey12147tx04.jpg'),
        title: 'LIGHT GREY',
        address: '12147 TX04',
        imageLink: 'lightgrey12147tx04'
    },
    {
        image: require('./../../images/projects/portrait/liniaro04927_002tx05.jpg'),
        title: 'LINIA RO',
        address: '04927_002 TX05',
        imageLink: 'liniaro04927_002tx05'
    },
    {
        image: require('./../../images/projects/portrait/lino71184tx02.jpg'),
        title: 'LINO',
        address: '71184 TX02',
        imageLink: 'lino71184tx02'
    },
    {
        image: require('./../../images/projects/portrait/lucenta13455tx02.jpg'),
        title: 'LUCENTA',
        address: '13455 TX02',
        imageLink: 'lucenta13455tx02'
    },
    {
        image: require('./../../images/projects/portrait/ordino841268.jpg'),
        title: 'Ordino',
        address: '841268',
        imageLink: 'ordino841268'
    },
    {
        image: require('./../../images/projects/portrait/pietragrey13453tx03.jpg'),
        title: 'PIETRA GREY',
        address: '13453 TX03',
        imageLink: 'pietragrey13453tx03'
    },
    {
        image: require('./../../images/projects/portrait/saltoak140005tx04.jpg'),
        title: 'SALT OAK',
        address: '140005 TX04',
        imageLink: 'saltoak140005tx04'
    },
    {
        image: require('./../../images/projects/portrait/shelteroak298016tx04.jpg'),
        title: 'SHELTER OAK',
        address: '298016 TX04',
        imageLink: 'shelteroak298016tx04'
    },
    {
        image: require('./../../images/projects/portrait/shelteroak298017tx04.jpg'),
        title: 'SHELTER OAK',
        address: '298017 TX04',
        imageLink: 'shelteroak298017tx04'
    },
    {
        image: require('./../../images/projects/portrait/shroomss6027tx01.jpg'),
        title: 'SHROOM',
        address: 'SS6027 TX01',
        imageLink: 'shroomss6027tx01'
    },
    {
        image: require('./../../images/projects/portrait/tobaccoss6007tx01.jpg'),
        title: 'TOBACCO',
        address: 'SS6007 TX01',
        imageLink: 'tobaccoss6007tx01'
    },
    {
        image: require('./../../images/projects/portrait/volukusmarble44201tx03.jpg'),
        title: 'VOLUKUS MARBLE',
        address: '44201 TX03',
        imageLink: 'volukusmarble44201tx03'
    },
    {
        image: require('./../../images/projects/portrait/whitess5520.jpg'),
        title: 'White',
        address: 'SS5520',
        imageLink: 'whitess5520'
    },
    {
        image: require('./../../images/projects/portrait/xaloc156007tx04.jpg'),
        title: 'XALOC',
        address: '156007 TX04',
        imageLink: 'xaloc156007tx04'
    },
]

var bnrimg = require('./../../images/banner/6.jpg');

class ProjectGrid4 extends React.Component {
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
                {/* <Header4 /> */}
                <div className="page-content">
                    <Banner title="Collection 2023-2025" pagename="Collection 2023-2025" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 column-grid-4 inner-page-padding">
                        <div className="container">
                           
                            {/* GALLERY CONTENT START */}
                            <ul className="masonry-outer mfp-gallery row work-grid clearfix list-unstyled">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-xl-3  col-lg-4 col-md-6 col-sm-12 m-b30`}>
                                        <div className="sx-box image-hover-block">
                                            <div className="sx-thum-bx">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="sx-info  p-t20 text-white">
                                                <h4 className="sx-tilte"><NavLink to={`./${item.imageLink}`}>{item.title}</NavLink></h4>
                                                <p className="m-b0">{item.address}</p>
                                            </div>
                                            <a className="mfp-link" href={item.image}>
                                                <i className="fa fa-arrows-alt" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                            {/* GALLERY CONTENT END */}
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer2 />
            </>
        );
    };
};

export default ProjectGrid4;
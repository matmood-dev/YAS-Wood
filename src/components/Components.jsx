import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home6 from './Pages/Home6';

import About2 from './Pages/About2';

import FontIcons from './Pages/FontIcons';

import ProjectGrid4 from './Pages/ProjectGrid4';

import ContactUs from './Pages/ContactUs';
import ScrollToTop from './Common/ScrollToTop';

import Products from './Pages/Products';

//samples
import Abiskoash from './Pages/samples/Abiskoash'
import Agostinooak13833tx04 from './Pages/samples/Agostinooak13833tx04';
import Callahan109037tx04 from './Pages/samples/callahan109037tx04'
import Callahan109039tx04 from './Pages/samples/callahan109039tx04';
import Celestineoak32374tx04 from './Pages/samples/celestineoak32374tx04'
import Cementoserra99063tx03 from './Pages/samples/cementoserra99063tx03';
import Fribourgoak13840tx04 from './Pages/samples/fribourgoak13840tx04';
import Anthracite12146tx04 from './Pages/samples/anthracite12146tx04'
import Blackss6565 from './Pages/samples/blackss6565'
import Breraeu07b1007tx05 from './Pages/samples/breraeu07b1007tx05'
import Charcoal from './Pages/samples/charcoal';
import Cirrusss6519tx01 from './Pages/samples/cirrusss6519tx01'
import Claygrey13600 from './Pages/samples/claygrey13600'
import Creamss6017tx01 from './Pages/samples/creamss6017tx01'
import Darkgreyss6577tx01 from './Pages/samples/darkgreyss6577tx01'
import Eskimoss1502 from './Pages/samples/eskimoss1502'
import Granolass6033 from './Pages/samples/granolass6033'
import Graphitegrey12146tx03 from './Pages/samples/graphitegrey12146tx03'
import Graphitegrey12146tx04 from './Pages/samples/graphitegrey12146tx04'
import Historyparlor18100tx03 from './Pages/samples/historyparlor18100tx03'
import Kaiserwalnut102019tx04 from './Pages/samples/kaiserwalnut102019tx04'
import Lightgrey12147tx03 from './Pages/samples/lightgrey12147tx03'
import Lightgrey12147tx04 from './Pages/samples/lightgrey12147tx04'
import Liniaro04927002tx05 from './Pages/samples/liniaro04927002tx05'
import Lino71184tx02 from './Pages/samples/lino71184tx02'
import Lucenta13455tx02 from './Pages/samples/lucenta13455tx02'
import Ordino841268 from './Pages/samples/ordino841268'
import Pietragrey13453tx03 from './Pages/samples/pietragrey13453tx03'
import Saltoak140005tx04 from './Pages/samples/saltoak140005tx04'
import Shelteroak298016tx04 from './Pages/samples/shelteroak298016tx04'
import Shelteroak298017tx04 from './Pages/samples/shelteroak298017tx04'
import Shroomss6027tx01 from './Pages/samples/shroomss6027tx01'
import Tobaccoss6007tx01 from './Pages/samples/tobaccoss6007tx01'
import Volukusmarble44201tx03 from './Pages/samples/volukusmarble44201tx03'
import Whitess5520 from './Pages/samples/whitess5520'
import Xaloc156007tx04 from './Pages/samples/xaloc156007tx04'

import About3 from './Elements/About3';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            <Route path='/' element={<Home6/>} />

                            <Route path='/about-2' element={<About2/>} />

                            <Route path='/products' element={<Products/>} />

                            <Route path='/icon-font' element={<FontIcons/>} />

                            {/* <Route path='/samples/collection2023-2025/' element={<ProjectGrid3/>} /> */}
                            <Route path='/samples/collection2023-2025/' element={<ProjectGrid4/>} />

                            <Route path='/contact-us' element={<ContactUs/>} />

                            <Route path='/samples/collection2023-2025/abiskoash30181tx04' element={<Abiskoash/>} />
                            <Route path='/samples/collection2023-2025/agostinooak13833tx04' element={<Agostinooak13833tx04/>} />
                            <Route path='/samples/collection2023-2025/callahan109037tx04' element={<Callahan109037tx04/>} />
                            <Route path='/samples/collection2023-2025/Callahan109039tx04' element={<Callahan109039tx04/>} />
                            <Route path='/samples/collection2023-2025/celestineoak32374tx04' element={<Celestineoak32374tx04/>} />
                            <Route path='/samples/collection2023-2025/cementoserra99063tx03' element={<Cementoserra99063tx03/>} />
                            <Route path='/samples/collection2023-2025/Fribourgoak13840tx04' element={<Fribourgoak13840tx04/>} />
                            <Route path='/samples/collection2023-2025/Anthracite12146tx04' element={<Anthracite12146tx04/>} />
                            <Route path='/samples/collection2023-2025/Black-ss6565' element={<Blackss6565/>} />
                            <Route path='/samples/collection2023-2025/breraeu07b1-007tx05' element={<Breraeu07b1007tx05/>} />
                            <Route path='/samples/collection2023-2025/Charcoal' element={<Charcoal/>} />
                            <Route path='/samples/collection2023-2025/Cirrusss6519tx01' element={<Cirrusss6519tx01/>} />
                            <Route path='/samples/collection2023-2025/clay-grey-13600' element={<Claygrey13600/>} />
                            <Route path='/samples/collection2023-2025/Creamss6017tx01' element={<Creamss6017tx01/>} />
                            <Route path='/samples/collection2023-2025/darkgreyss6577tx01' element={<Darkgreyss6577tx01/>} />
                            <Route path='/samples/collection2023-2025/eskimoss1502' element={<Eskimoss1502/>} />
                            <Route path='/samples/collection2023-2025/granolass6033' element={<Granolass6033/>} />
                            <Route path='/samples/collection2023-2025/graphitegrey12146tx03' element={<Graphitegrey12146tx03/>} />
                            <Route path='/samples/collection2023-2025/graphitegrey12146tx04' element={<Graphitegrey12146tx04/>} />
                            <Route path='/samples/collection2023-2025/historyparlor18100tx03' element={<Historyparlor18100tx03/>} />
                            <Route path='/samples/collection2023-2025/kaiserwalnut102019tx04' element={<Kaiserwalnut102019tx04/>} />
                            <Route path='/samples/collection2023-2025/lightgrey12147tx03' element={<Lightgrey12147tx03/>} />
                            <Route path='/samples/collection2023-2025/lightgrey12147tx04' element={<Lightgrey12147tx04/>} />
                            <Route path='/samples/collection2023-2025/liniaro04927_002tx05' element={<Liniaro04927002tx05/>} />
                            <Route path='/samples/collection2023-2025/lino71184tx02' element={<Lino71184tx02/>} />
                            <Route path='/samples/collection2023-2025/lucenta13455tx02' element={<Lucenta13455tx02/>} />
                            <Route path='/samples/collection2023-2025/ordino841268' element={<Ordino841268/>} />
                            <Route path='/samples/collection2023-2025/pietragrey13453tx03' element={<Pietragrey13453tx03/>} />
                            <Route path='/samples/collection2023-2025/saltoak140005tx04' element={<Saltoak140005tx04/>} />
                            <Route path='/samples/collection2023-2025/shelteroak298016tx04' element={<Shelteroak298016tx04/>} />
                            <Route path='/samples/collection2023-2025/shelteroak298017tx04' element={<Shelteroak298017tx04/>} />
                            <Route path='/samples/collection2023-2025/shroomss6027tx01' element={<Shroomss6027tx01/>} />
                            <Route path='/samples/collection2023-2025/tobaccoss6007tx01' element={<Tobaccoss6007tx01/>} />
                            <Route path='/samples/collection2023-2025/volukusmarble44201tx03' element={<Volukusmarble44201tx03/>} />
                            <Route path='/samples/collection2023-2025/whitess5520' element={<Whitess5520/>} />
                            <Route path='/samples/collection2023-2025/xaloc156007tx04' element={<Xaloc156007tx04/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;
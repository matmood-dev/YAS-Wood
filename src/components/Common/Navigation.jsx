import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/mobilenav.js');

    };

    render() {
        return (
            <>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li><NavLink to={"/about-2"}>About us</NavLink>
                    </li>
                    <li><NavLink to={"/products"}>Products</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={"/samples/collection2023-2025/"}>Collection</NavLink>
                    </li>
                    
                    <li><NavLink to={"/contact-us"}>Contact us</NavLink></li>
                </ul>
            </>
        );
    };
};

export default Navigation;
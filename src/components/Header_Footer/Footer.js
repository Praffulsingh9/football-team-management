import React, { Component } from 'react';
import {CityLogo} from '../ui/icons';

class Footer extends Component {
    render() {
        return (
            <footer className="bck_blue">
                <div className="footer_logo">
                    <CityLogo width="70px" height="70px" link={true} linkTo="/"/>
                </div>
                <div className="footer_disclamer">
                  Manchester City 2018.All Rights reserved.
                </div>
            </footer>
        );
    }
}

export default Footer;
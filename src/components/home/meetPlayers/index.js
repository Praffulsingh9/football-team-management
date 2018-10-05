import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import {Tag} from '../../ui/misc'; 
class MeetPlayers extends Component {

    state = {

    }

    render() {
        return (
            <div className="home_meetplayers" style={{background:`#ffffff url(${Stripes})` }}>
                <div className="container">
                    <div className="home_meetplayers_wrapper">
                        <div className="home_card_wrapper">
                         
                        </div>
                        <div className="home_text_wrapper">
                             <div>
                                 <Tag 
                                   bck="#0e1731" 
                                   size="100px" 
                                   color="#ffffff"
                                   style={{
                                       display:'inline-block',
                                       marginBottom:'20px'
                                   }}>MEET</Tag>
                             </div>
                             <div>
                                 <Tag 
                                   bck="#0e1731" 
                                   size="100px" 
                                   color="#ffffff"
                                   style={{
                                       display:'inline-block',
                                       marginBottom:'20px'
                                   }}>THE</Tag>
                             </div>
                             <div>
                                 <Tag 
                                   bck="#0e1731" 
                                   size="100px" 
                                   color="#ffffff"
                                   style={{
                                       display:'inline-block',
                                       marginBottom:'20px'
                                   }}>PLAYERS</Tag>
                             </div>
                             <div>
                             <Tag 
                                   bck="#ffffff" 
                                   size="27px" 
                                   color="#0e1731"
                                   link={true}
                                   linkTo="/team"
                                   style={{
                                    display:'inline-block',
                                    marginBottom:'27px'
                                }}
                                   >Meet The Team</Tag>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MeetPlayers;
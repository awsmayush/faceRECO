import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import beer from './Cheers.png';

const Logo=()=>{
    return(
        <Tilt className="Tilt br2 shadow-2" options={{ max : 30 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"> <img alt='logo' src={beer}/> </div>
       </Tilt>
    );

}
export default Logo;

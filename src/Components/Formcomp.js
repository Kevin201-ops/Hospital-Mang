import React from 'react'
import { useState } from 'react';
import Bookapp from './Appts';
import "../styles/Hnav.css"

function Formcomp() {
    const [seen, setSeen] = useState(false)
    ;

    function togglePop() {
        setSeen(!seen);
    };
    return (
        <div >
            <button className='free' onClick={togglePop} >Book appointments </button>
            {seen ? <Bookapp toggle={togglePop} /> : null}
        </div>
    )
}

export default Formcomp

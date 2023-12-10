// Title.js

import React from 'react';
import './Title.css';

function Title() {
    const titleStyle = {
        fontFamily: 'Sometype Mono, monospace',
    };

    return (
        <div className="title" style={titleStyle}>
            <h1>SUSTAMEEKT</h1>
            <span>space</span>
        </div>
    );
}

export default Title;

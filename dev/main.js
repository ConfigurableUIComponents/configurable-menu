/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

const div = document.createElement('div');
div.setAttribute('id', 'sideBarTestApp');
document.body.appendChild(div);

ReactDOM.render(
    <Application />,
    document.getElementById('sideBarTestApp'),
);

/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../src/menu.jsx';

const div = document.createElement('div');
div.setAttribute('id', 'sideBarTestApp');
document.body.appendChild(div);

const items = [
  {
    type: 'button',
    id: 'roleA',
    displayName: 'aaaaaaaa',
    onClick: (data) => console.log(`menu item ${data.id} clicked`)
  },
  {
    type: 'button',
    id: 'roleB',
    displayName: 'b',
    onClick: (data) => console.log(`menu item ${data.id} clicked`)
  },
  {
    type: 'checklist',
    id: 'checkList1',
    displayName: 'personalization',
    items: [{
      id: 'cardA', displayName: 'card A'
    }],
    onClick: (data) => console.log(`map of checklist items- selected (true/false): ${map}`)
  }

]

ReactDOM.render(
  <Menu title="views menu" items={items} selectedItem={{id: 'roleA'}}/>,
  document.getElementById('sideBarTestApp'),
);

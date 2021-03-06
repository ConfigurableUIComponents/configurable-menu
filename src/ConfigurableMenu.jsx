/* eslint-disable */
import React, { Component } from 'react';
import MenuItem from './MenuItem';
import CheckList from './CheckList';

import '../res/scss/components/sidebar.scss';

export default class ConfigurableMenu extends Component {


  renderSidebarHeader () {
    return (
        <div className = "sidebarHeader clearfix">
          <div className = "close" onClick={this.props.onClose}></div>
          <div className = "title" title={this.props.title}>
            {this.props.title}
          </div>
        </div>
    )}

    getControls() {
      const controls = this.props.items.map((item) => {
        const {id, displayName, onClick ,status, items} = item;
        const isSelected = item.id === this.props.selectedItem.id;
        if (item.type === 'button') return <MenuItem key={`MenuItem${item.id}`} id={id} displayName={displayName}
                                                     onClick={this.props.onSelectionChange} isSelected={isSelected}/>;
        if (item.type === 'checklist') return <CheckList key={`CheckList${item.id}`} id={id} displayName={displayName} items={items}
                                                         onClick={this.props.onSelectionChange} selectedChecklistItems={this.props.selectedChecklistItems} isSelected={isSelected} />;

      })
      return controls;
    }


  render() {
    return (

        <div className = {this.props.open ? "sidebar opened" : "sidebar"} >
          {this.renderSidebarHeader()}
          {
            this.getControls()
          }
        </div>



    );
  }
}

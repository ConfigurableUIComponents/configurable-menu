/* eslint-disable */
import React, { Component } from 'react';
import SideBar from './sidebar/Sidebar.jsx';
import '../res/scss/components/mainApp.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: true,
    };
  }

  onCloseSidebar = () => {
    this.setState({
      sidebarOpened: false,
    });
  }

  onOpenSidebar = () => {
    this.setState({
      sidebarOpened: true
    });
  }

  render() {
    return (
      <div>
        <div className="sidebarButton" title="Open Sidebar" onClick ={this.onOpenSidebar} > View Settings </div>
          <SideBar
            opened = {this.state.sidebarOpened}
            headerTitle={this.props.title}
            onCloseSidebar={this.onCloseSidebar}
            items={this.props.items}
            selectedItemId={this.props.selectedItem}
          />
      </div>
    );
  }
}

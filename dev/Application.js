import React from 'react';
import items from './items';
import ConfigurableMenu from "../src/ConfigurableMenu";


export default class Application extends React.Component {

  constructor(){
    super();
    this.state = {
      selectedItem: { id: 'roleB' },
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

  onSelectionChange = (data) => {
    this.setState({
      selectedItem: data
    })
  }

  render() {
    return [
      <div>my selected view:{this.state.selectedItem.id}</div>,
      <div className="sidebarButton" title="Open Sidebar" onClick ={this.onOpenSidebar}>View Settings</div>,
      <ConfigurableMenu open={this.state.sidebarOpened} onClose={this.onCloseSidebar} title="views menu" items={items} selectedItem={this.state.selectedItem} onSelectionChnage={this.onSelectionChange} />
    ]
  };

}



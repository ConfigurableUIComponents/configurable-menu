import React from 'react';
import items from './items';
import ConfigurableMenu from "../src/ConfigurableMenu";


export default class Application extends React.Component {

  constructor(){
    super();
    this.state = {
      items: items,
      selectedItem: { id: 'checkList1' },
      selectedChecklist: false,
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

  onSelectedChecklistItem = (item) => {
    this.setState({
      selectedChecklistItems: item
    })
    console.log(item.displayName);
  }

  disableCard = (items) =>  {

    //find checklist
let checklist ;

    for (var i = 0; i < this.state.items.length; i++) {
      const item = this.state.items[i];
      if (item.id == 'checkList1')
      {
        checklist = item;
      }
    }

    console.log(checklist);
    //find CardB

    const  checklistItems = checklist.items;

    console.log(checklistItems);
    for (var i = 0; i < checklistItems.length; i++) {
      if (checklistItems[i].id == 'cardB' && checklistItems[i].isSelected)
      {
        checklistItems[i].isSelected = false ;
        console.log(checklistItems[i].id);
        console.log(checklistItems[i].isSelected);
      }
    }


  }


  render() {
    return [
      <div key="1" >my selected view:{this.state.selectedItem.id}</div>,
      <button key="2" onClick={() => this.disableCard(items)} >remove card B </button>,
      <div key="3" className="sidebarButton" title="Open Sidebar" onClick ={ () =>  this.onOpenSidebar}>View Settings</div>,
      <ConfigurableMenu key="4" open={this.state.sidebarOpened} onClose={this.onCloseSidebar} title="views menu" items={this.state.items} selectedItem={this.state.selectedItem} onSelectionChange={this.onSelectionChange} selectedChecklistItems={this.onSelectedChecklistItem} />,
    ]
  };

}



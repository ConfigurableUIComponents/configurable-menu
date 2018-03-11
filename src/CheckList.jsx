/* eslint-disable */
import React from 'react';


export default class CheckList extends React.Component {


  constructor(props){
    super(props)
    this.state = {
        items: props.items
    };
  }

  onSubItemSelected(changedItem) {

    const items = this.state.items;
      items.map(item => {
          if(item.id === changedItem.id) item.isSelected = !item.isSelected;
          return item;
      })
    this.props.selectedChecklistItems(changedItem);

    this.setState({items});
   //  this.props.onClick(this);
  }


    getCheckLists() {
        return this.state.items.map((item) => {
            return <div className="item widgetItem">
                <input className="checkbox" type="checkbox" checked={item.isSelected}
                       onClick={() => this.onSubItemSelected(item)}></input>
                <span className="widgetName">{item.displayName}</span>
            </div>
        })
    }

	render() {
    var i =0;
    //let personalizedHeader =  renderPersonalizedHeader(this.props.dashboard, onPersonalizationClicked);
    const {displayName, onClick, isSelected, id, items} = this.props;
    let itemClass = "item dashboardItem";
    itemClass += (isSelected ? " selected" : "");
    return(
        [ <div onClick= {() => onClick({ id } )}
             className={itemClass}
             key={id}
             title={displayName}>
          <div className = "dashboardName">{displayName}</div>
        </div>,
        <div className="widgetList">
          {
            isSelected ? this.getCheckLists() : null
          }
        </div>]

    )
  }
}

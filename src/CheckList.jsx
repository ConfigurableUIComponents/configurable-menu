/* eslint-disable */
import React from 'react';


export default class CheckList extends React.Component {


  constructor(props){
    super(props)
    this.state = {
        items: props.items
    };
  }

  componentWillReceiveProps = (props) => {
    this.setState({items: props.items});
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
            let classNameItem = `item widgetItem ${item.isSelected ? 'selected' : ''}`;
            return <div key={`item${item.id}`} className={classNameItem}>
                <span className="checkbox" type="checkbox" onClick={() => this.onSubItemSelected(item)}></span>
                <span className="widgetName" title={item.displayName}>{item.displayName}</span>
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
        <div key={`widgetList${id}`} className="widgetList">
          {
            isSelected ? this.getCheckLists() : null
          }
        </div>]

    )
  }
}

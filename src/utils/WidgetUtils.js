/* eslint-disable */

class WidgetUtils {
  static getNotAllowedWidgetTemplate() {
    return {
      url: "/launchpad/notAllowedWidget.html",
      width: 3,
      height: 3
    };
  }

  static removeWidgetFromList(widgetList, widget) {
    return widgetList.filter(function(currentWidget) {
      if (currentWidget.id === widget.id) {
        return false;
      }
      return true;
    });
  }

	static addWidgetToList(widgetList, widget) {
		return widgetList.concat(widget);
	};

	static findWidget (widgetID, widgets) {
		return WidgetUtils._findByID(widgetID, widgets);
	};

	static findMenuAction (actionID, menuActions) {
		return WidgetUtils._findByID(actionID, menuActions);
	};

	static _findByID (id, arr) {
		var found = null;
		if(arr) {
			arr.some((obj) => {
				if(id === obj.id) {
					found = obj;
					return true;
				}
				return false;
			});
		}
		return found;
	};

	static findAction (actionID, actions) {
		return actions && actions[actionID];
	};

	static widgetCompare(widgetA, widgetB){
		return (widgetA.name).localeCompare(widgetB.name);
	}
}
export default WidgetUtils;
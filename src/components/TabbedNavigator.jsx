import React from "react";
const TabbedNavigator = (props) => {
  return (
    <div className="d-inline-flex flex-row tabbed-navigator">
      {props.tabs.map((tab) => (
        <div
          key={tab.uri}
          className="aml-font tab-active"
          onClick={props.onSwitch}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default TabbedNavigator;

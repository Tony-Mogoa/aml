import React from "react";

const NavItem = (props) => {
  const { navItemText, navItemIcon } = props;
  return (
    <div className="nav-div-item">
      <span>{navItemIcon}</span>
      <span>{navItemText}</span>
    </div>
  );
};

export default NavItem;

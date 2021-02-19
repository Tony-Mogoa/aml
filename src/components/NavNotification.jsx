import React from "react";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { colors } from "../constants/colors";
const NavNotification = (props) => {
  if (props.notify) {
    return <VscBellDot size={20} color={colors.skyblue} className="ml-3" />;
  } else {
    return <VscBell size={20} color={colors.skyblue} className="ml-3" />;
  }
};

export default NavNotification;

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { colors } from "../constants/colors";
const SearchField = (props) => {
  const iconSize = 20;
  if (props.clicked) {
    return (
      <div className="d-flex flex-row align-items-center">
        <IoSearchOutline
          onClick={props.onClick}
          size={iconSize}
          color={colors.skyblue}
        />
        <input type="text" className="text-input aml-font ml-2" size={10} />
      </div>
    );
  } else {
    return (
      <IoSearchOutline
        onClick={props.onClick}
        size={iconSize}
        color={colors.skyblue}
      />
    );
  }
};

export default SearchField;

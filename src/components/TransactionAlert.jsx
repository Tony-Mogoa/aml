import React from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { colors } from "../constants/colors";
const TransactionAlert = ({ customerName, alertText }) => {
  return (
    <div className="d-flex flex-row aml-font shadow-sm rounded m-3 p-2 border align-items-center border-light">
      <IoNotificationsCircle size={36} color={colors.yellow} className="mr-1" />
      <span style={{ width: 450, color: colors.grey }}>
        Customer <span style={{ color: colors.fontBlue }}>{customerName}</span>{" "}
        {alertText}
      </span>
      <div className="btn-group dropend">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          id="dropdownMenuButton1"
        >
          Dropright
        </button>
        {/* <HiDotsVertical
          color={colors.skyblue}
          size={20}
          className="dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          id="dropdownMenuButton1"
        /> */}
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item">Action</a>
          </li>
          <li>
            <a className="dropdown-item">Another action</a>
          </li>
          <li>
            <a className="dropdown-item">Something else here</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TransactionAlert;

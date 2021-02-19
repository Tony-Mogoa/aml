import React, { Component } from "react";
import { BiShieldQuarter } from "react-icons/bi";
import { colors } from "../constants/colors";
import { AiFillHome } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { IoWalletOutline, IoDocumentOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import SearchField from "./SearchField";
import NavNotification from "./NavNotification";
import UserBar from "./UserBar";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-row justify-content-start aml-nav align-items-stretch">
        <div className="nav-brand">
          <BiShieldQuarter size={36} color={colors.white} />
        </div>
        <div className="nav-div-item d-flex flex-row align-items-center nav-item-active">
          <span>
            <AiFillHome size={16} />
          </span>
          <span className="nav-item-text">Home</span>
        </div>
        <div className="nav-div-item d-flex flex-row align-items-center">
          <span>
            <FaAward size={16} />
          </span>
          <span className="nav-item-text">Investigation</span>
        </div>
        <div className="nav-div-item d-flex flex-row align-items-center">
          <span>
            <IoWalletOutline size={16} />
          </span>
          <span className="nav-item-text">Transactions</span>
        </div>
        <div className="nav-div-item d-flex flex-row align-items-center">
          <span>
            <IoDocumentOutline size={16} />
          </span>
          <span className="nav-item-text">Reports</span>
        </div>
        <div className="nav-div-item d-flex flex-row align-items-center">
          <span>
            <BsGear size={16} />
          </span>
          <span className="nav-item-text">Settings</span>
        </div>
        <div className="flex-grow-1 d-flex flex-row justify-content-end leftmost-nav-item align-items-center aml-font">
          <SearchField />
          <NavNotification notify={false} />
          <div
            className="vertical-separator ml-3"
            style={{ width: 1, height: 40 }}
          ></div>
          <UserBar userFullName="Tom Jerry" userRole="Administrator" />
        </div>
      </div>
    );
  }
}

export default NavBar;

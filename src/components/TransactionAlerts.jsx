import React, { Component } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { colors } from "../constants/colors";

class TransactionAlerts extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column bg-white mx-3 rounded mt-3 p-2">
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row">
            <div>
              <HiDotsVertical
                color={colors.skyblue}
                size={20}
                className="ml-2"
              />
              <span className="aml-font-bold">Unsual Transaction Alerts</span>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default TransactionAlerts;

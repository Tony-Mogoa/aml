import React, { Component } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { colors } from "../constants/colors";
import TabbedNavigator from "./TabbedNavigator";
import BarChart from "./BarChart";
import DonutPlot from "./DonutPlot";

class RecentActivity extends Component {
  state = {
    tabs: [
      { name: "Today", uri: "today" },
      { name: "Monthly", uri: "monthly" },
      { name: "Quarterly", uri: "quarterly" },
      { name: "Yearly", uri: "yearly" },
    ],
    totalTransactions: 23512,
    unusualTransactions: 252,
  };
  render() {
    return (
      <div className="d-flex flex-column bg-white mx-3 rounded mt-3 p-2">
        <div className="d-flex flex-row justify-content-between m-2">
          <div>
            <HiDotsVertical color={colors.skyblue} size={20} className="ml-2" />
            <span className="aml-font-bold">Recent Activity</span>
          </div>
          <TabbedNavigator
            tabs={this.state.tabs}
            onSwitch={() => alert("todo")}
          />
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div
            className="d-inline-flex flex-column p-2 ml-4 text-white"
            id="transaction-count"
          >
            <div
              style={{ backgroundColor: "#7938d0" }}
              className="w-100 text-center t-l-c-round t-r-c-round p-5 aml-font"
            >
              Total Transactions
              <br />
              <span className="aml-digit-font">
                {this.state.totalTransactions}
              </span>
            </div>
            <div
              style={{ backgroundColor: "#ffa036" }}
              className="w-100 text-center b-l-c-round b-r-c-round p-5 aml-font"
            >
              Unusual Transactions
              <br />
              <span className="aml-digit-font">
                {this.state.unusualTransactions}
              </span>
            </div>
          </div>
          <BarChart width={800} height={330} />
          <DonutPlot width={200} height={200} />
        </div>
      </div>
    );
  }
}

export default RecentActivity;

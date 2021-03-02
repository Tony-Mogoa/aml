import React, { Component } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { colors } from "../constants/colors";
import DetailItem from "./DetailItem";
import TabbedNavigator from "./TabbedNavigator";
import LinearCurve from "./LinearCurve";

class AccountActivity extends Component {
    state = {
        tabs: [
            { name: "Deposits", uri: "deposits" },
            { name: "Credit", uri: "credit" },
            { name: "Investments", uri: "investments" },
        ],
        accountDetails: [
            { title: "Branch", detailText: "12345" },
            { title: "Institution", detailText: "123" },
            { title: "Account Number", detailText: "1234534554" },
        ],
    };
    render() {
        return (
            <div className="d-flex flex-column bg-white ml-1 mr-3 rounded mt-3 p-2 flex-grow-1">
                <div className="d-flex flex-row justify-content-between m-2">
                    <div>
                        <HiDotsVertical
                            color={colors.skyblue}
                            size={20}
                            className="ml-2"
                        />
                        <span className="aml-font-bold">Recent Activity</span>
                    </div>
                    <TabbedNavigator
                        tabs={this.state.tabs}
                        onSwitch={() => alert("todo")}
                    />
                </div>
                <div className="d-flex flex-row justify-content-start">
                    {this.state.accountDetails.map((detail) => (
                        <DetailItem
                            key={detail.title}
                            detail={detail}
                            styleClass="my-2 mx-4"
                        />
                    ))}
                </div>
                <LinearCurve width={630} height={400} />
            </div>
        );
    }
}

export default AccountActivity;

import React, { Component } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiRefreshLine } from "react-icons/ri";
import { colors } from "../constants/colors";
import TransactionAlert from "./TransactionAlert";

class TransactionAlerts extends Component {
    state = {
        lastUpdate: "10 minutes",
        alerts: [
            {
                customerName: "John Doe",
                id: "1",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "2",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "3",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "4",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "5",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "6",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "7",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "8",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "9",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
            {
                customerName: "John Doe",
                id: "10",
                alertText:
                    "did more than 10 transactions in the same day totalling to $500, 000 USD",
            },
        ],
    };
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
                            <span className="aml-font-bold">
                                Unusual Transaction Alerts
                            </span>
                        </div>
                    </div>
                    <div className="aml-font">
                        <RiRefreshLine color={colors.grey3} className="mr-1" />
                        <span style={{ color: colors.grey3 }}>
                            Last update: {this.state.lastUpdate} ago
                        </span>
                    </div>
                </div>
                <div className="mt-2">
                    {this.state.alerts.map((alert) => (
                        <TransactionAlert
                            key={alert.id}
                            customerName={alert.customerName}
                            alertText={alert.alertText}
                        />
                    ))}
                </div>
                <div className="text-center">
                    <span className="clickable-text aml-font">
                        See 15 more alerts
                    </span>
                </div>
            </div>
        );
    }
}

export default TransactionAlerts;

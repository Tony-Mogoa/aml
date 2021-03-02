import React, { Component } from "react";
import { colors } from "../constants/colors";
import { HiDotsVertical } from "react-icons/hi";
import { FaSort } from "react-icons/fa";
import InvestigationItem from "./InvestigationItem";
class OngoingInvestigations extends Component {
    state = {
        investigations: [
            {
                id: "1",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "2",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "3",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "4",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "5",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "6",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "7",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "8",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "9",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "10",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
            {
                id: "11",
                bank: "Bank of Osaka",
                country: "Japan",
                clientName: "John Doe",
                agentName: "Agent Smith",
                progress: 1,
            },
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
                        <span className="aml-font-bold">
                            Ongoing Investigations
                        </span>
                    </div>
                </div>
                <div className="m-2">
                    <table className="table aml-font table-hover align-middle">
                        <thead style={{ color: colors.grey3 }}>
                            <tr>
                                <th scope="col">
                                    Bank
                                    <FaSort size={12} />
                                </th>
                                <th scope="col">
                                    Client
                                    <FaSort size={12} />
                                </th>
                                <th scope="col">
                                    Assigned To
                                    <FaSort size={12} />
                                </th>
                                <th scope="col">
                                    Progress
                                    <FaSort size={12} />
                                </th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.investigations.map((investigation) => (
                                <InvestigationItem
                                    key={investigation.id}
                                    row={investigation}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default OngoingInvestigations;

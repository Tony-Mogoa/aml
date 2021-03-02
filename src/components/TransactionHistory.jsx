import React, { Component } from "react";
import SplitButton from "./SplitButton";
import BlueButton from "./BlueButton";
import { AiOutlineCloudDownload, AiOutlinePrinter } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import { colors } from "../constants/colors";
import TransactionRowItem from "./TransactionRowItem";

class TransactionHistory extends Component {
    state = {
        buttons: [
            {
                label: "Date Range",
                id: "1",
                dropList: [
                    { id: 1, label: "Item 1", url: "2e" },
                    { id: 2, label: "Item 1", url: "2e" },
                    { id: 3, label: "Item 1", url: "2e" },
                ],
            },
            {
                label: "Recipient Country",
                id: "2",
                dropList: [
                    { id: 1, label: "Item 1", url: "2e" },
                    { id: 2, label: "Item 1", url: "2e" },
                    { id: 3, label: "Item 1", url: "2e" },
                ],
            },
            {
                label: "Status",
                id: "3",
                dropList: [
                    { id: 1, label: "Item 1", url: "2e" },
                    { id: 2, label: "Item 1", url: "2e" },
                    { id: 3, label: "Item 1", url: "2e" },
                ],
            },
            {
                label: "Amount Range",
                id: "4",
                dropList: [
                    { id: 1, label: "Item 1", url: "2e" },
                    { id: 2, label: "Item 1", url: "2e" },
                    { id: 3, label: "Item 1", url: "2e" },
                ],
            },
        ],

        transactions: [
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13252550000",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "135",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13252560000545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "1322325545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "1325285545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "1325259505",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "685545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13252685545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13252615545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "32525545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13252545545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13252545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "1352545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13432525545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13252578545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
            {
                dateTime: "Jun 15 2018 - 02:44PM",
                transferID: "13445545",
                recipient: "Hayao Miyazaki",
                recipientBank: { bank: "Bank of Osaka", country: "Japan" },
                status: { classNameProp: "btn-danger", label: "Error" },
                amount: { figure: 125.0, currency: "USD" },
            },
        ],
    };
    render() {
        return (
            <div className="d-flex flex-column m-3 p-2">
                <div className="aml-font-bold">
                    Transaction History - Deposits
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row">
                        {this.state.buttons.map((button) => (
                            <SplitButton key={button.id} button={button} />
                        ))}
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <BlueButton
                            label="Print"
                            icon={
                                <AiOutlinePrinter size={16} className="mr-1" />
                            }
                        />
                        <BlueButton
                            label="Export"
                            icon={
                                <AiOutlineCloudDownload
                                    size={16}
                                    className="mr-1"
                                />
                            }
                        />
                        <form>
                            <input
                                className="form-control"
                                type="search"
                                size={10}
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                    </div>
                </div>
                <div>
                    <table className="table aml-font align-middle">
                        <thead style={{ color: colors.grey3 }}>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">
                                    Transaction Date & Time
                                    <FaSort size={12} />
                                </th>
                                <th scope="col">
                                    Transfer ID
                                    <FaSort size={12} />
                                </th>
                                <th scope="col">
                                    Recipient
                                    <FaSort size={12} />
                                </th>
                                <th scope="col">
                                    Recipient Bank
                                    <FaSort size={12} />
                                </th>
                                <th scope="col">
                                    Status
                                    <FaSort size={12} />
                                </th>
                                <th scope="col">
                                    Amount
                                    <FaSort size={12} />
                                </th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.transactions.map((transaction) => (
                                <TransactionRowItem
                                    key={transaction.transferID}
                                    row={transaction}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TransactionHistory;

import React, { Component } from "react";
import { colors } from "../constants/colors";
import DetailItem from "./DetailItem";
import InvestigationColumn from "./InvestigationColumn";
import Log from "./Log";

class TransactionExpand extends Component {
    //use transactionID props to populate data
    state = {
        detailItemStyle: "m-1",
        borderCss: {
            borderRight: `1px solid ${colors.faint}`,
        },
        logItems: [
            {
                title: "Request Created",
                date: "April 15 2015 02:44PM",
                style: "danger",
            },
            {
                title: "Request Created",
                date: "April 15 2015 02:44PM",
                style: "success",
            },
            {
                title: "Request Created",
                date: "April 15 2015 02:44PM",
                style: "success",
            },
            {
                title: "Request Created",
                date: "April 15 2015 02:44PM",
                style: "danger",
            },
            {
                title: "Request Created",
                date: "April 15 2015 02:44PM",
                style: "danger",
            },
        ],
    };

    render() {
        const { detailItemStyle, borderCss } = this.state;
        return (
            <div className="d-flex flex-row justify-content-between">
                <div style={borderCss} className="px-3">
                    <table className="table aml-font align-middle mx-2">
                        <tbody>
                            <tr>
                                <td>
                                    <div
                                        style={{ color: colors.violet }}
                                        className="aml-font-bold m-1"
                                    >
                                        PAYMENT METHOD
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "Transaction Type",
                                            detailText: "PayPal",
                                        }}
                                    />
                                </td>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "Credit ID",
                                            detailText: "3OY2RY83284",
                                        }}
                                    />
                                </td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>
                                    <div
                                        style={{ color: colors.violet }}
                                        className="aml-font-bold m-1"
                                    >
                                        RECIPIENT PROFILE
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "Full Name",
                                            detailText: "Hayao Miyazaki",
                                        }}
                                    />
                                </td>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "Account Number",
                                            detailText: "3747484839",
                                        }}
                                    />
                                </td>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "Account Type",
                                            detailText: "Business",
                                        }}
                                    />
                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>
                                    <div
                                        style={{ color: colors.violet }}
                                        className="aml-font-bold m-1"
                                    >
                                        BANK PROFILE
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "Bank Name",
                                            detailText: "Bank of Osaka",
                                        }}
                                    />
                                </td>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "City",
                                            detailText: "Osaka",
                                        }}
                                    />
                                </td>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "Country",
                                            detailText: "Japan",
                                        }}
                                    />
                                </td>
                                <td>
                                    <DetailItem
                                        styleClass={detailItemStyle}
                                        detail={{
                                            title: "Bank ID",
                                            detailText: "1457900",
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={borderCss} className="px-3 flex-grow-1">
                    <Log logItems={this.state.logItems} />
                </div>
                <div className="flex-grow-1 px-3">
                    <InvestigationColumn
                        dateStart="April 16 2015 10.06 AM"
                        agent="Smith"
                        status={0}
                    />
                </div>
            </div>
        );
    }
}

export default TransactionExpand;

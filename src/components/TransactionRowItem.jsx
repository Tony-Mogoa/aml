import React, { useState } from "react";
import RoundedIcon from "./RoundedIcon";
import { colors } from "../constants/colors";
import { IoWalletOutline } from "react-icons/io5";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import TransactionExpand from "./TransactionExpand";
const TransactionRowItem = ({ row }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <React.Fragment>
            <tr>
                <td>
                    <RoundedIcon
                        icon={
                            <IoWalletOutline
                                color={colors.lightBlue}
                                size={16}
                                className="round-bg-icon"
                            />
                        }
                        bgColor={colors.lightSkyBlue}
                        side={36}
                    />
                </td>
                <td>{row.dateTime}</td>
                <td>{row.transferID}</td>
                <td>{row.recipient}</td>
                <td>
                    <div className="d-flex flex-column justify-content-start">
                        <span>{row.recipientBank.bank}</span>
                        <span>{row.recipientBank.country}</span>
                    </div>
                </td>
                <td>
                    <button
                        className={"aml-font btn " + row.status.classNameProp}
                        style={{
                            fontSize: 13,
                            fontWeight: "bold",
                            fontFamily: "'Noto Sans HK', sans-serif",
                        }}
                    >
                        {row.status.label}
                    </button>
                </td>
                <td>
                    ${row.amount.figure} {row.amount.currency}
                </td>
                <td>
                    <RoundedIcon
                        icon={
                            expanded ? (
                                <BsChevronUp
                                    color={colors.lightBlue}
                                    size={16}
                                    className="round-bg-icon"
                                />
                            ) : (
                                <BsChevronDown
                                    color={colors.lightBlue}
                                    size={16}
                                    className="round-bg-icon"
                                />
                            )
                        }
                        bgColor={colors.white}
                        clicked={expanded}
                        side={36}
                        classes="expand-chevron-hover"
                        onClick={setExpanded}
                    />
                </td>
            </tr>
            {expanded && (
                <tr>
                    <td colSpan="8">
                        <TransactionExpand />
                    </td>
                </tr>
            )}
        </React.Fragment>
    );
};

export default TransactionRowItem;

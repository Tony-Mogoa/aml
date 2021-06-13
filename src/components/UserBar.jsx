import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { colors } from "../constants/colors";
const UserBar = (props) => {
    const { userFullName, userRole } = props;
    return (
        <div
            className="d-flex flex-row align-items-center"
            style={{ color: colors.grey, marginLeft: 20 }}
        >
            <div
                className="d-flex flex-column justify-content-end"
                style={{ marginRight: 20 }}
            >
                <span
                    className="text-end"
                    style={{ fontWeight: "bold", textAlign: "right" }}
                >
                    {userFullName}
                </span>
                <span style={{ fontWeight: "normal" }}>{userRole}</span>
            </div>
            <div
                className="rounded-circle d-flex"
                style={{
                    width: 36,
                    height: 36,
                    backgroundColor: colors.grey2,
                }}
            >
                <FaRegUser
                    color={colors.white}
                    size={16}
                    className="round-bg-icon"
                />
            </div>
            <div>
                <div
                    className="ml-2 p-2 hover:bg-gray-100 rounded flex justify-center items-center"
                    onClick={props.onShowMenu}
                >
                    <HiDotsVertical
                        color={colors.skyblue}
                        size={20}
                        className=""
                        onClick={props.onShowMenu}
                    />
                </div>
                {props.showMenu ? (
                    <div className="absolute border rounded z-50 bg-white top-14 right-1 shadow text-sm">
                        <ul className="py-2">
                            <li
                                className="px-10 py-3 hover:bg-gray-200 border-b border-gray-100"
                                onClick={props.onLogout}
                            >
                                Logout
                            </li>
                            <li className="px-10 py-3 hover:bg-gray-200 border-b border-gray-100">
                                Menu item 2
                            </li>
                            <li className="px-10 py-3 hover:bg-gray-200">
                                Menu item 3
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default UserBar;

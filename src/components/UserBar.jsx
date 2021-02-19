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
        <FaRegUser color={colors.white} size={16} className="round-bg-icon" />
      </div>
      <HiDotsVertical color={colors.skyblue} size={20} className="ml-2" />
    </div>
  );
};

export default UserBar;

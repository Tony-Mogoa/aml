import React from "react";
import { colors } from "../constants/colors";
import { FaRegUser } from "react-icons/fa";
import ProgressCircles from "./ProgressCircles";
const InvestigationItem = ({
  row,
  bank,
  country,
  clientName,
  agentName,
  progress,
}) => {
  return (
    <tr>
      <td>
        <div className="d-flex flex-column">
          <span>{row.bank}</span>
          <span style={{ color: colors.grey }}>{row.country}</span>
        </div>
      </td>
      <td>{row.clientName}</td>
      <td>
        <div className="d-flex flex-row align-items-center">
          <span
            className="rounded-circle d-flex mr-1"
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
          </span>
          <span>{row.agentName}</span>
        </div>
      </td>
      <td>
        <ProgressCircles level={row.progress} />
      </td>
      <td>
        <button
          className="btn btn-default text-white"
          style={{
            backgroundColor: colors.buttonBlue,
            fontSize: 13,
            fontWeight: "bold",
            fontFamily: "'Noto Sans HK', sans-serif",
          }}
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default InvestigationItem;

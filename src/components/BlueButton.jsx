import React from "react";
import { colors } from "../constants/colors";

const BlueButton = ({ label, icon }) => {
    return (
        <button
            className="btn btn-default text-white m-1"
            style={{
                backgroundColor: colors.buttonBlue,
                fontSize: 13,
                fontWeight: "bold",
                fontFamily: "'Noto Sans HK', sans-serif",
            }}
        >
            {icon}
            {label}
        </button>
    );
};

export default BlueButton;

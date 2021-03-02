import React from "react";
import { colors } from "../constants/colors";

const BlueTitle = ({ label }) => {
    return (
        <div style={{ color: colors.violet }} className="aml-font-bold m-1">
            {label}
        </div>
    );
};

export default BlueTitle;

import React from "react";
import { colors } from "../constants/colors";

const DetailItem = ({ detail }) => {
    return (
        <div className="aml-font d-flex flex-column justify-content-start my-2 mx-4">
            <span style={{ color: colors.grey }}>{detail.title}</span>
            <span className="aml-font-bold">{detail.detailText}</span>
        </div>
    );
};

export default DetailItem;

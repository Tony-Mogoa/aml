import React from "react";
import { colors } from "../constants/colors";

const DetailItem = ({ detail, styleClass, titleClass }) => {
    return (
        <div
            className={
                "aml-font d-flex flex-column justify-content-start " +
                styleClass
            }
        >
            <div style={titleClass ? { color: colors.grey } : {}}>
                {detail.title}
            </div>
            <span className="aml-font-bold">{detail.detailText}</span>
        </div>
    );
};

export default DetailItem;

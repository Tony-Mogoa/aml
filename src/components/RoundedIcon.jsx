import React from "react";

//add className="round-bg-icon" to icon
const RoundedIcon = ({ icon, bgColor, side, classes, onClick, clicked }) => {
    return (
        <div
            className={"rounded-circle d-flex " + classes}
            style={{
                width: side,
                height: side,
                backgroundColor: bgColor,
            }}
            onClick={() => onClick(!clicked)}
        >
            {icon}
        </div>
    );
};

export default RoundedIcon;

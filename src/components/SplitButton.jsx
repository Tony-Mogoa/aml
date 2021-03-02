import React from "react";
const SplitButton = ({ button }) => {
    return (
        <div className="btn-group m-2">
            <button
                type="button"
                className="btn light"
                style={{ fontSize: 12 }}
            >
                {button.label}
            </button>
            <button
                type="button"
                className="btn btn-light dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            ></button>
            <ul className="dropdown-menu">
                {button.dropList.map((dropItem) => (
                    <li key={dropItem.id}>
                        <a className="dropdown-item" href={dropItem.url}>
                            {dropItem.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SplitButton;

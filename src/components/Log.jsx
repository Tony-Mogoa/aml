import React from "react";
import BlueTitle from "./BlueTitle";
import DetailItem from "./DetailItem";

const Log = ({ logItems }) => {
    const styles = {
        circle: {
            width: 12,
            height: 12,
        },
    };
    return (
        <div className="d-flex flex-column justify-content-start">
            <BlueTitle label="LOG" />

            {logItems.map((item) => (
                <div className="d-flex flex-row align-items-start">
                    <div className="d-flex flex-column align-items-center">
                        <div
                            style={styles.circle}
                            className={
                                "rounded-circle p-circles border m-1 bg-" +
                                item.style
                            }
                        ></div>
                        <div
                            className={
                                "vertical-separator-dashed border-" + item.style
                            }
                            style={{
                                width: 1,
                                height: 40,
                            }}
                        ></div>
                    </div>
                    <div className="d-flex flex-column">
                        <DetailItem
                            styleClass={
                                item.style === "danger" && "text-danger"
                            }
                            titleClass={false}
                            detail={{
                                title: item.title,
                                detailText: item.date,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Log;

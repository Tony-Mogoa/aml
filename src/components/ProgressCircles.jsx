import React from "react";
const ProgressCircles = ({ level }) => {
    const styles = {
        circle: {
            width: 12,
            height: 12,
        },
    };

    const levelText = [
        "Investigation opened",
        "Confirmed as unusual",
        "In peer review",
        "Awaiting approval",
        "Complete",
    ];

    const style = [];
    for (let i = 0; i < level; i++) {
        style[i] = " bg-violet";
    }

    return (
        <div>
            <div className="d-flex flex-row">
                <div
                    style={styles.circle}
                    className={
                        "m-1 rounded-circle p-circles border border-2" +
                        style[0]
                    }
                ></div>
                <div
                    style={styles.circle}
                    className={
                        "m-1 rounded-circle p-circles border border-2" +
                        style[1]
                    }
                ></div>
                <div
                    style={styles.circle}
                    className={
                        "m-1 rounded-circle p-circles border border-2" +
                        style[2]
                    }
                ></div>
                <div
                    style={styles.circle}
                    className={
                        "m-1 rounded-circle p-circles border border-2" +
                        style[2]
                    }
                ></div>
                <div
                    style={styles.circle}
                    className={
                        "m-1 rounded-circle p-circles border border-2" +
                        style[3]
                    }
                ></div>
            </div>
            <div>{levelText[level - 1]}</div>
        </div>
    );
};

export default ProgressCircles;

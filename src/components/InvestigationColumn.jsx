import React from "react";
import BlueTitle from "./BlueTitle";
import DetailItem from "./DetailItem";
import { FaRegUser } from "react-icons/fa";
import RoundedIcon from "./RoundedIcon";
import { colors } from "../constants/colors";
import ProgressCircles from "./ProgressCircles";

const InvestigationColumn = ({ dateStart, agent, status }) => {
    return (
        <div className="d-flex flex-column justify-content-start h-100">
            <div className="mb-4">
                <BlueTitle label="INVESTIGATION" />
            </div>

            <div className="mb-5">
                <DetailItem
                    detail={{
                        title: "Investigation Opened On",
                        detailText: dateStart,
                    }}
                />
            </div>
            <div className="mb-5">
                <DetailItem
                    detail={{
                        title: "Assigned to",
                        detailText: (
                            <div className="d-flex flex-row align-items-center mt-1">
                                <RoundedIcon
                                    icon={
                                        <FaRegUser
                                            color={colors.white}
                                            size={16}
                                            className="round-bg-icon"
                                        />
                                    }
                                    bgColor={colors.grey2}
                                    side={36}
                                />
                                <span className="aml-font-bold ml-1">
                                    {agent}
                                </span>
                            </div>
                        ),
                    }}
                />
            </div>
            <div className="mb-5">
                <DetailItem
                    detail={{
                        title: "Assigned to",
                        detailText: (
                            <div className="d-flex flex-row align-items-center mt-1">
                                <ProgressCircles level={1} />
                            </div>
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default InvestigationColumn;

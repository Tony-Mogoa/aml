import React, { Component } from "react";
import { colors } from "../constants/colors";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

class ClientProfile extends Component {
    state = {
        client: {
            fullName: "John Matthews Doe",
            birthday: "Feb 12th 2001",
            sin: "213-213-213",
            street: "123 Road Lane",
            zipCode: "90210, Beverly Hills",
            state: "CA",
            country: "USA",
            homePhone: "+1 123 123 1234",
            mobile: "+1 123 123 1234",
            email: "john.doe@email.com",
            jobTitle: "Investment Advisor",
            employerName: "XYZ Investments",
            startDate: "Feb 24 2020",
            salary: 100000,
            maritalStatus: "Married",
            spouseName: "Jane Doe",
            spouseBirthday: "Nov 8th 1994",
            children: 3,
        },
    };
    render() {
        const { client } = this.state;
        return (
            <div className="d-flex flex-column bg-white mx-3 rounded mt-3 p-2">
                <div className="d-flex flex-row">
                    <div>
                        <HiDotsVertical
                            color={colors.skyblue}
                            size={20}
                            className="ml-2"
                        />
                        <span className="aml-font-bold">Client Profile</span>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center mt-1">
                    <div
                        className="rounded-circle d-flex mx-3 my-1"
                        style={{
                            width: 64,
                            height: 64,
                            backgroundColor: colors.grey2,
                        }}
                    >
                        <FaRegUser
                            color={colors.white}
                            size={16}
                            className="round-bg-icon"
                        />
                    </div>
                    <div className="aml-font d-flex flex-column justify-content-start mx-3 my-1">
                        <span style={{ color: colors.grey }}>Full Name</span>
                        <span
                            className="aml-font-bold"
                            style={{ fontSize: 17 }}
                        >
                            {client.fullName}
                        </span>
                    </div>
                    <div className="aml-font d-flex flex-column justify-content-start mx-3 my-1">
                        <span style={{ color: colors.grey }}>Birthday</span>
                        <span className="aml-font-bold">{client.birthday}</span>
                    </div>
                    <div className="aml-font d-flex flex-column justify-content-start mx-3 my-1">
                        <span style={{ color: colors.grey }}>SIN</span>
                        <span className="aml-font-bold">{client.sin}</span>
                    </div>
                </div>

                <table className="table aml-font align-middle mx-2">
                    <tbody>
                        <tr>
                            <td>
                                <div
                                    style={{ color: colors.violet }}
                                    className="aml-font-bold m-1"
                                >
                                    CONTACT
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Address
                                    </span>
                                    <div className="aml-font-bold d-flex flex-column">
                                        <span>{client.street}</span>
                                        <span>{client.zipCode}</span>
                                        <span>
                                            {client.state} {client.country}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Home
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.homePhone}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Mobile
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.mobile}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Email
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.email}
                                    </span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div
                                    style={{ color: colors.violet }}
                                    className="aml-font-bold m-1"
                                >
                                    EMPLOYER
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Job Title
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.jobTitle}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Employer Name
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.employerName}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Start Date
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.startDate}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Salary
                                    </span>
                                    <span className="aml-font-bold">
                                        ${client.salary}
                                    </span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div
                                    style={{ color: colors.violet }}
                                    className="aml-font-bold m-1"
                                >
                                    FAMILY
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Marital Status
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.maritalStatus}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Spouse Name
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.spouseName}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Spouse Birthday
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.spouseBirthday}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="aml-font d-flex flex-column justify-content-start mx-1 my-1">
                                    <span style={{ color: colors.grey }}>
                                        Children
                                    </span>
                                    <span className="aml-font-bold">
                                        {client.children}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ClientProfile;

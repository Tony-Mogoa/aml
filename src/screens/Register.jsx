import React, { Component } from "react";
import { colors } from "../constants/colors";
import { BiShieldQuarter } from "react-icons/bi";
import axios from "axios";
import { withRouter } from "react-router";

const baseUrl = "http://localhost:8000/api";

class Register extends Component {
    state = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirmation: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleRedirect = (qrCode, google2fa_secret) => {
        this.props.history.push({
            pathname: "/2fa",
            state: {
                qrCode: qrCode,
                google2fa_secret: google2fa_secret,
            },
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { firstName, lastName, email, password, passwordConfirmation } =
            this.state;

        const creds = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        };

        const authCreds = {
            email: email,
            password: password,
        };

        axios.post(`${baseUrl}/register`, creds).then((resp) => {
            console.log(resp.data);
            if (resp.data.success) {
                axios.post(`${baseUrl}/setup2fa`, authCreds).then((res) => {
                    console.log(res.data);
                    this.handleRedirect(
                        res.data.qrCode,
                        res.data.google2fa_secret
                    );
                });
            }
        });
    };

    render() {
        return (
            <div className="w-full h-screen flex justify-center items-center text-gray-500">
                <div className="border rounded-lg py-6 px-10 flex flex-col items-center">
                    <BiShieldQuarter
                        size={48}
                        color={colors.buttonBlue}
                        className="mb-2"
                    />
                    <span className="text-2xl mb-2 font-light">
                        Anti-Money Laundering
                    </span>
                    <span className="text-sm mb-4 font-bold">Register</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="flex items-center mb-4 gap-3">
                            <div className="flex flex-col">
                                <label htmlFor="firstName" className="text-xs">
                                    Firstname
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    size={13}
                                    className="focus:outline-none border rounded-3xl px-3 py-2"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="lastName" className="text-xs">
                                    Lastname
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    size={13}
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    className="focus:outline-none border rounded-3xl px-3 py-2"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-xs">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="focus:outline-none border rounded-3xl px-3 py-2"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="password" className="text-xs">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className="focus:outline-none border rounded-3xl px-3 py-2"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label
                                htmlFor="passwordConfirmation"
                                className="text-xs"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                type="password"
                                value={this.state.passwordConfirmation}
                                onChange={this.handleChange}
                                className="focus:outline-none border rounded-3xl px-3 py-2"
                            />
                        </div>

                        <div className="mb-1">
                            <button className="px-4 py-2 bg-blue-500 w-full text-white rounded text-sm font-semibold">
                                Create account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);

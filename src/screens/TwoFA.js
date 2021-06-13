import React, { Component } from "react";
import { withRouter } from "react-router";
import { colors } from "../constants/colors";
import { BiShieldQuarter } from "react-icons/bi";

class TwoFA extends Component {
    state = {};

    handleFininsh = () => {
        const { history } = this.props;

        history.push("/login");
    };
    render() {
        return (
            <div className="w-full h-screen flex justify-center items-center text-gray-500">
                <div className="border rounded-lg p-10 w-4/12 items-center flex flex-col">
                    <BiShieldQuarter
                        size={48}
                        color={colors.buttonBlue}
                        className="mb-4"
                    />
                    <span className="mb-3">
                        To complete your registration, we'll need to set up two
                        factor authentication using{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US"
                        >
                            Google Authenticator
                        </a>
                        .
                    </span>
                    <span className="text-gray-800">
                        Scan the QR code below using that app.
                    </span>

                    <div className="border rounded-lg">
                        <img
                            src={this.props.location.state.qrCode}
                            alt="Cant see the QR code?"
                        />
                    </div>

                    <span>Use the setup key instead:</span>
                    {console.log(this.props.location.state.google2fa_secret)}
                    <span className="mb-4">
                        {this.props.location.state.google2fa_secret}
                    </span>

                    <button
                        className="w-full px-4 py-2 rounded bg-indigo-500 text-sm font-semibold text-white"
                        onClick={this.handleFininsh}
                    >
                        Finish
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(TwoFA);

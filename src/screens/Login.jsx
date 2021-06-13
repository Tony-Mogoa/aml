import React, { Component, useState } from "react";
import { colors } from "../constants/colors";
import { BiShieldQuarter } from "react-icons/bi";
import axios from "axios";
import { useAuth } from "../hooks/auth";
import { useHistory, Link } from "react-router-dom";

function Login() {
    const baseUrl = "http://localhost:8000/api";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [totp, setTotp] = useState("");
    const [msg, setMsg] = useState("");
    const auth = useAuth();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const creds = {
            email: email,
            password: password,
            totp: totp,
        };

        axios
            .post(`${baseUrl}/login`, creds)
            .then((resp) => {
                //localStorage.setItem("token", resp.data.token);
                auth.signin(creds);
                history.push("/home");
                // auth.login(() => {
                //     this.props.history.push("/home");
                // }, resp.data.token);
            })
            .catch((err) => {
                setMsg(err.response.data.message);
            });
    };

    return (
        <div className="w-full h-screen flex justify-center items-center text-gray-500">
            <div className="border rounded-lg py-6 px-20 flex flex-col items-center">
                <BiShieldQuarter
                    size={64}
                    color={colors.buttonBlue}
                    className="mb-3"
                />
                <span className="text-2xl mb-2">Anti-Money Laundering</span>
                <span className="text-sm mb-4">Login</span>
                <span
                    className={`mb-2 border border-gray-500 text-red-600 text-xs p-2 rounded ${
                        msg === "" ? "hidden" : ""
                    }`}
                >
                    {msg}
                </span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="text-xs">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="focus:outline-none border rounded-3xl px-3 py-2"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="totp" className="text-xs">
                            Google Authenticator One-Time-Pin
                        </label>
                        <input
                            id="totp"
                            type="text"
                            name="totp"
                            value={totp}
                            onChange={(e) => setTotp(e.target.value)}
                            className="focus:outline-none border rounded-3xl px-3 py-2"
                        />
                    </div>

                    <div className="mb-4">
                        <button className="px-6 py-2 bg-blue-500 w-full text-white rounded text-sm">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
// class Login extends Component {

//     state = {
//         email: "",
//         password: "",
//         totp: "",
//         msg: "",
//     };

//     handleChange = (event) => {
//         const target = event.target;
//         this.setState({
//             [target.name]: target.value,
//         });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();

//         const { email, password, totp } = this.state;

//         const creds = {
//             email: email,
//             password: password,
//             totp: totp,
//         };

//         const auth = useAuth();
//         axios
//             .post(`${baseUrl}/login`, creds)
//             .then((resp) => {
//                 localStorage.setItem("token", resp.data.token);
//                 //this.props.history.push("/");
//                 auth.login(() => {
//                     this.props.history.push("/home");
//                 }, resp.data.token);
//             })
//             .catch((err) => {
//                 this.setState({ msg: err.response.data.message });
//             });
//     };

//     render() {
//         const { msg } = this.state;
//         return (
//             <div className="w-full h-screen flex justify-center items-center text-gray-500">
//                 <div className="border rounded-lg py-6 px-20 flex flex-col items-center">
//                     <BiShieldQuarter
//                         size={64}
//                         color={colors.buttonBlue}
//                         className="mb-3"
//                     />
//                     <span className="text-2xl mb-2">Anti-Money Laundering</span>
//                     <span className="text-sm mb-4">Login</span>

//                     <span
//                         className={`mb-2 border border-gray-500 text-red-600 text-xs p-2 rounded ${
//                             msg === "" ? "hidden" : ""
//                         }`}
//                     >
//                         {this.state.msg}
//                     </span>

//                     <form onSubmit={this.handleSubmit}>
//                         <div className="flex flex-col mb-4">
//                             <label htmlFor="email" className="text-xs">
//                                 Email address
//                             </label>
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 value={this.state.email}
//                                 onChange={this.handleChange}
//                                 className="focus:outline-none border rounded-3xl px-3 py-2"
//                             />
//                         </div>

//                         <div className="flex flex-col mb-4">
//                             <label htmlFor="password" className="text-xs">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 value={this.state.password}
//                                 onChange={this.handleChange}
//                                 className="focus:outline-none border rounded-3xl px-3 py-2"
//                             />
//                         </div>

//                         <div className="flex flex-col mb-4">
//                             <label htmlFor="totp" className="text-xs">
//                                 Google Authenticator One-Time-Pin
//                             </label>
//                             <input
//                                 id="totp"
//                                 type="text"
//                                 name="totp"
//                                 value={this.state.totp}
//                                 onChange={this.handleChange}
//                                 className="focus:outline-none border rounded-3xl px-3 py-2"
//                             />
//                         </div>

//                         <div className="mb-4">
//                             <button className="px-6 py-2 bg-blue-500 w-full text-white rounded text-sm">
//                                 Log in
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default withRouter(Login);

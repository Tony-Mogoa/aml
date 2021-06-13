import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return localStorage.getItem("user") ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: location } }}
                    />
                );
            }}
        />
    );
}

export default PrivateRoute;

import "./App.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import TransactionsScreen from "./screens/TransactionsScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./screens/Register";
import TwoFA from "./screens/TwoFA";
import PrivateRoute from "./components/ProtectedRoute";
import { ProvideAuth } from "./hooks/auth";

function App() {
    return (
        <ProvideAuth>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/2fa" component={TwoFA}></Route>
                </Switch>

                <Switch>
                    <PrivateRoute exact path="/home">
                        <div className="d-flex flex-column">
                            <NavBar />
                            <Home />
                        </div>
                    </PrivateRoute>
                    <PrivateRoute exact path="/transactions">
                        <div className="d-flex flex-column">
                            <NavBar />
                            <TransactionsScreen />
                        </div>
                    </PrivateRoute>
                </Switch>
            </Router>
        </ProvideAuth>
    );
}

export default App;

import "./App.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./screens/Home";
import TransactionsScreen from "./screens/TransactionsScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="d-flex flex-column">
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/transactions">
                        <TransactionsScreen />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

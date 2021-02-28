import "./App.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./screens/Home";
import TransactionsScreen from "./screens/TransactionsScreen";

function App() {
  return (
    <div className="d-flex flex-column">
      <NavBar />
      <TransactionsScreen />
    </div>
  );
}

export default App;

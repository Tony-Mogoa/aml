import "./App.css";
import "./App.css";
import NavBar from "./components/Navbar";
import RecentActivity from "./components/RecentActivity";
import TransactionAlerts from "./components/TransactionAlerts";

function App() {
  return (
    <div className="d-flex flex-column">
      <NavBar />
      <RecentActivity />
      <TransactionAlerts />
    </div>
  );
}

export default App;

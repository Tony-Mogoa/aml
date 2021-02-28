import "./App.css";
import "./App.css";
import NavBar from "./components/Navbar";
import OngoingInvestigations from "./components/OngoingInvestigations";
import RecentActivity from "./components/RecentActivity";
import TransactionAlerts from "./components/TransactionAlerts";

function App() {
  return (
    <div className="d-flex flex-column">
      <NavBar />
      <RecentActivity />
      <div className="d-flex flex-row w-100">
        <TransactionAlerts />
        <OngoingInvestigations />
      </div>
    </div>
  );
}

export default App;

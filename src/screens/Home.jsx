import React, { Component } from "react";
import OngoingInvestigations from "../components/OngoingInvestigations";
import RecentActivity from "../components/RecentActivity";
import TransactionAlerts from "../components/TransactionAlerts";

class Home extends Component {
    state = {};
    render() {
        return (
            <div>
                <RecentActivity />
                <div className="d-flex flex-row w-100 mb-3">
                    <TransactionAlerts />
                    <OngoingInvestigations />
                </div>
            </div>
        );
    }
}

export default Home;

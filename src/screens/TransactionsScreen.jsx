import React, { Component } from "react";
import AccountActivity from "../components/AccountActivity";
import ClientProfile from "../components/ClientProfile";
import TransactionHistory from "../components/TransactionHistory";
class TransactionsScreen extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <ClientProfile />
          <AccountActivity />
        </div>
        <TransactionHistory />
      </div>
    );
  }
}

export default TransactionsScreen;

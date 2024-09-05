import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { useState } from "react";
import BuyAirtimeData from "./components/BuyAirtimeData";
import SendReceive from "./components/SendReceive";
import TransferAccount from "./components/TransferAccount";
import TransferEcash from "./components/TransferEcash";
import TransferLink from "./components/TransferLink";
import PayBills from "./components/PayBills";
import PayBillsComponent from "./components/PayBillsComponent";

function App() {
  const [active, setActive] = useState("Card");

  const showDashboard = (component) => {
    setActive(component);
  };

  return (
    <div className="app">
      <Header />
      <Sidebar showDashboard={showDashboard} />
      <main className="app__content" showDashboard={showDashboard}>
        {active === "Card" && <Card />}
        {active === "BuyAirtimeData" && <BuyAirtimeData />}
        {active === "transfer-money" && (
          <SendReceive showDashboard={showDashboard} />
        )}
        {active === "account" && <TransferAccount />}
        {active === "eCash" && <TransferEcash />}
        {active === "transferlink" && <TransferLink />}

        {active === "PayBills" && <PayBills showDashboard={showDashboard} />}
        {active === "PayBillsComponent" && <PayBillsComponent showDashboard={showDashboard} />}
      </main>
      <div className="footer">OK</div>
    </div>
  );
}

export default App;

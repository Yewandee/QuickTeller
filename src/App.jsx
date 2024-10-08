import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import BuyAirtimeData from "./components/BuyAirtimeData";
import SendReceive from "./components/SendReceive";
import TransferAccount from "./components/TransferAccount";
import TransferEcash from "./components/TransferEcash";
import TransferLink from "./components/TransferLink";
import PayBills from "./components/PayBills";
import PayBillsComponent from "./components/PayBillsComponent";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main className="app__content">
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/buy-airtime" element={<BuyAirtimeData />} />
            <Route path="/transfer-money" element={<SendReceive />} />
            <Route path="/account" element={<TransferAccount />} />
            <Route path="/ecash" element={<TransferEcash />} />
            <Route path="/transferlink" element={<TransferLink />} />
            <Route path="/paybills" element={<PayBills />} />
            <Route
              path="/paybills/:dashboard"
              element={<PayBillsComponent />}
            />
          </Routes>
        </main>
        <div className="footer">OK</div>
      </div>
    </Router>
  );
}

export default App;

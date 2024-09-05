import React from "react";

// Import Images
import Mtn from "../assets/mtn.jpg";
import Airtel from "../assets/airtel.jpg";
import Etisalat from "../assets/etisalat.jpg";
import Glo from "../assets/glo.jpg";

const paybillsDashboard = [
  {
    dashBoardData: "airtime-and-data",
    labels: "Airtime and Data",
    images: [
      { img: Mtn, hText: "MTN Mobile Data Plan", pText: "VTU Plus" },
      {
        img: Etisalat,
        hText: "9Mobile Data Bundles",
        pText: "EasyBlaze Data Topup",
      },
      { img: Etisalat, hText: "9Mobile PostPaid", pText: "Pay 9Mobile Bills" },
      { img: Glo, hText: "GLO Data Bundle", pText: "GLO Data Bundle" },
      { img: "", hText: "", pText: "" },
      { img: "", hText: "", pText: "" },
      { img: "", hText: "", pText: "" },
    ],
  },
];

const PayBillsComponent = ({ showDashboard }) => {
  const currentDashboardData = paybillsDashboard[showDashboard] || [];

  const currentDashboard = paybillsDashboard.find(
    (dashboard) => dashboard.dashBoardData === showDashboard
  );
  return (
    <section className="PayBillsComponent">
      {paybillsDashboard.map((value, index) => (
        <div className="container">
          {currentDashboardData.length > 0 ? (
            <div className="div">
              <h2>{value.labels}</h2>
              <div className="paybills-content">
                <div className="paybills-images">
                  <img src={value.images} alt="" />
                </div>
                <div className="paybills-texts">
                  <h4>{value.hText}</h4>
                  <p>{value.pText}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Please select a valid dashboard</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default PayBillsComponent;

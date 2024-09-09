import React from "react";
import { useParams } from "react-router-dom";

// Import Paybills Data
import paybillsDashboard from './PayBillsData.jsx'


const PayBillsComponent = () => {
  const { dashboard } = useParams();

  const currentDashboard = paybillsDashboard.find(
    (dashboardItem) => dashboardItem.dashBoardData === dashboard
  );

  if (!currentDashboard) {
    return <p>Please select a valid dashboard</p>;
  }
  return (
    <section className="PayBillsComponent">
      <div className="container">
        <h2>{currentDashboard.labels}</h2>
        {currentDashboard.images.map((image, index) => (
          <div className="paybills-content" key={index}>
            <div className="paybills-images">
              <img src={image.img} alt={image.hText} />
            </div>
            <div className="paybills-texts">
              <h4>{image.hText}</h4>
              <p>{image.pText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PayBillsComponent;

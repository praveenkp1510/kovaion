import React from "react";
import "./Dashboard.scss";

import { cardData } from "../data";
import Topbar from "../Components/TopBar/Topbar";
import Card from "../Components/Card/Card";
import Table from "../Components/Table/Table";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <Topbar />

        <div className="dashboard-body">
          
          <div className="leads-header">
            <div className="header-icon">📊</div>
            <h1>Leads</h1>
          </div>

          
          <div className="cards-container">
            {cardData.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                value={data.value}
                change={data.change}
                status={data.status}
                chartColor={data.chartColor}
              />
            ))}
          </div>

         
          <div className="table-container">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

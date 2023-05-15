import React from "react";
import "./Drivers.css";

const Drivers = () => {
  return (
    <div className="driver-container">
      <div className="driver-content">
        <div className="driver">
          <h4>New Drivers</h4>
          <p>25</p>
        </div>
        <div className="driver">
          <h4>Active Drivers</h4>
          <p>45</p>
        </div>
        <div className="driver">
          <h4>Total Drivers</h4>
          <p>55</p>
        </div>
        <div className="driver">
          <h4>On Hand cash Drivers</h4>
          <p>45</p>
        </div>
        <div className="driver">
          <h4>Total On Cash Amount</h4>
          <p>4285</p>
        </div>
      </div>
      <div className="driver-list">
        <table style={{ width: "100%" }}>
          <tr>
            <th>#Id</th>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Cash On Hand</th>
            <th>Driver Id</th>
            <th>Document Verification</th>
            <th>Address</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Ram</td>
            <td>91735689478</td>
            <td>2000</td>
            <td>015</td>
            <td>verified</td>
            <td>Althan</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Ram</td>
            <td>91735689478</td>
            <td>2000</td>
            <td>015</td>
            <td>verified</td>
            <td>Althan</td>
          </tr>
          <tr>
            <td>03</td>
            <td>Ram</td>
            <td>91735689478</td>
            <td>2000</td>
            <td>015</td>
            <td>verified</td>
            <td>Althan</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Ram</td>
            <td>91735689478</td>
            <td>2000</td>
            <td>015</td>
            <td>verified</td>
            <td>Althan</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Drivers;

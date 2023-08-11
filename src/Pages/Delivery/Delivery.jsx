import React from "react";
import "./Delivery.css";


const Delivery = () => {
  return (
    <>
      {" "}
      <div className="delivery-container">
        <div className="delivery-list">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>User name</th>
                <th>Address</th>
                <th>Amount</th>
                <th>Delivery Boy</th>
              </tr>
              <tr>
                <td>#1254656</td>
                <td>xyz@gmail.com</td>
                <td>93126457952</td>
                <td>Mark Spector</td>
                <td>Jagatpura</td>
                <td>4000</td>
                <td>
                  <select className="delivery_option" name="languages" id="lang">
                    <option value="select">Assign Delivery Boy</option>
                    <option value="javascript">Ramesh</option>
                    <option value="php">Mukesh</option>
                    <option value="java">Marks</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Delivery;

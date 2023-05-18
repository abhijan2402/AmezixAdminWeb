import React from "react";
import "./Order.css";
import Filter from '../../Components/Filter/Filter'
const Order = () => {
  return (
    <div className="order-container">
      <div className="categoriefilter"><Filter/></div>
      <div className="order-content">
        <div className="order">
          <h4>New Order</h4>
          <p>45</p>
        </div>
        <div className="order">
          <h4>Dispatch Order</h4>
          <p>45</p>
        </div>
        <div className="order">
          <h4>On The Way Order</h4>
          <p>45</p>
        </div>
        <div className="order">
          <h4>Cancle Order</h4>
          <p>45</p>
        </div>
        <div className="order">
          <h4>Exchange Order</h4>
          <p>45</p>
        </div>
        <div className="order">
          <h4>Total Complete Order</h4>
          <p>45</p>
        </div>
      </div>
      <div className="order-list">
        <table style={{width:"100%"}}>
            <tr>
                <th>#Id</th>
                <th>Name</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Payment Mode</th>
            </tr>
            <tr>
                <td>043</td>
                <td>Rahul</td>
                <td>Nike Shoes</td>
                <td>Dispatched</td>
                <td>Cash</td>
            </tr>
            <tr>
                <td>03</td>
                <td>Jay</td>
                <td>Watch</td>
                <td>Dispatched</td>
                <td>Online</td>
            </tr>
            <tr>
                <td>035</td>
                <td>Nitin</td>
                <td>Watch</td>
                <td>Dispatched</td>
                <td>Online</td>
            </tr>
            <tr>
                <td>083</td>
                <td>Ankit</td>
                <td>Watch</td>
                <td>Dispatched</td>
                <td>Online</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default Order;

import React from 'react'
import './Dashboard.css'
import Filter from '../../Components/Filter/Filter'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="categoriefilter"><Filter/></div>
        <div className="dashboard-content">
          <div className="active_order"><h4>Active Order</h4><p>45</p></div>
          <div className="active_order"><h4>Total Sales</h4><p>45000</p></div>
          <div className="active_order"><h4>Active User</h4><p>50</p></div>
          <div className="active_order"><h4>New User</h4><p>45</p></div>
          <div className="active_order"><h4>Active Stores</h4><p>60</p></div>
          <div className="active_order"><h4>Cancle Order</h4><p>75</p></div>
          <div className="active_order"><h4>Active Drivers</h4><p>55</p></div>
          <div className="active_order"><h4>Exchange Order</h4><p>85</p></div>
          <div className="active_order"><h4>Total Complete Order</h4><p>15</p></div>
        </div>
    </div>
  )
}

export default Dashboard

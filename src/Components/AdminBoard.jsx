import React,{useState} from "react";
import "./AdminBoard.css";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
import PaidIcon from '@mui/icons-material/Paid';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Dashboard from "../Pages/Dashboard/Dashboard";
import Categories from "../Pages/Categories/Categories";
import Order from "../Pages/Order/Order";
import Stores from "../Pages/Stores/Stores";
import User from "../Pages/Users/User";
import Drivers from "../Pages/Drivers/Drivers";
import Transaction from "../Pages/Transaction/Transaction";
import SubAdmin from "../Pages/Sub Admin/SubAdmin";

const AdminBoard = () => {

  return (
    <div className="main-Container">
      <div className="side-panel sticky">
        <div className="panel-header">
          <h3>Amezix</h3>
          <h4>Admin Panel</h4>
        </div>
        <div className="panel-navigation">
                <p className="Dashboard"> <DashboardIcon style={{ fontSize: "25px"}}/> <AnchorLink href="#dashboard"><span >Dashboard</span></AnchorLink>   </p>
                <p className="Categories"> <CategoryIcon style={{ fontSize: "25px"}}/> <AnchorLink href="#categorie"><span >Categories</span></AnchorLink>   </p>
                <p className="orders"> <BorderColorIcon style={{ fontSize: "25px"}}/> <span>orders</span> </p>
                <p className="Stores"> <StoreIcon style={{ fontSize: "25px"}}/> <span>Stores</span> </p>
                <p className="Users"> <PeopleIcon style={{ fontSize: "25px"}}/> <span>Users</span> </p>
                <p className="Drivers"> <AccountCircleIcon style={{ fontSize: "25px"}}/> <span>Drivers</span> </p>
                <p className="Transation"> <PaidIcon style={{ fontSize: "25px"}}/> <span>Transation</span> </p>
                <p className="Sub_Admin"> <SupervisorAccountIcon style={{ fontSize: "25px"}}/> <span>Sub Admin</span> </p>
        </div>
      </div>
      <div className="Container">
            <div className="header">
              <button className="logout-btn">Logout</button>
              <AccountCircleIcon
                  style={{ fontSize: "60px", marginRight: "20px", cursor:"pointer" }}
              />
            </div>
            <div className="main-content">
              <div id="dashboard"><Dashboard/></div>
              <div id="categorie"><Categories/></div>   
              <div id="order"><Order/></div>  
              <div id="stores"><Stores/></div> 
              <div id="orders"><User/></div> 
              <div id="drivers"><Drivers/></div> 
              <div id="transaction"><Transaction/></div> 
              <div id="subAdmin"><SubAdmin/></div> 
            </div>
      </div>
    </div>
  );
};

export default AdminBoard;

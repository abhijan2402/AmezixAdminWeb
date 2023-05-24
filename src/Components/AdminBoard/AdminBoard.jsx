import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminBoard.css";


import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Categories from "../../Pages/Categories/Categories";
import Order from "../../Pages/Order/Order";
import Stores from "../../Pages/Stores/Stores";
import User from "../../Pages/Users/User";
import Drivers from "../../Pages/Drivers/Drivers";
import Transaction from "../../Pages/Transaction/Transaction";
import SubAdmin from "../../Pages/Sub Admin/SubAdmin";

const AdminBoard = () => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  return (
    <div className="main-Container">
      <div className="side-panel sticky">
        <div className="panel-header">
          <h3>Amezix</h3>
          <h4>Admin Panel</h4>
        </div>
        <div className="panel-navigation">
          <p className="Dashboard">
            <DashboardIcon style={{ fontSize: "25px" }} />{" "}
            <span onClick={() => setActive("Dashboard")}>Dashboard</span>{" "}
          </p>
          <p className="Categories">
            <CategoryIcon style={{ fontSize: "25px" }} />{" "}
            <span onClick={() => setActive("Categories")}>Categories</span>{" "}
          </p>
          <p className="orders">
            <BorderColorIcon style={{ fontSize: "25px" }} />{" "}
            <span onClick={() => setActive("Order")}>orders</span>{" "}
          </p>
          <p className="Stores">
            <StoreIcon style={{ fontSize: "25px" }} />{" "}
            <span onClick={() => setActive("Stores")}>Stores</span>{" "}
          </p>
          <p className="Users">
            <PeopleIcon style={{ fontSize: "25px" }} />{" "}
            <span onClick={() => setActive("User")}>Users</span>{" "}
          </p>
          <p className="Drivers">
            <AccountCircleIcon style={{ fontSize: "25px" }} />{" "}
            <span onClick={() => setActive("Drivers")}>Drivers</span>{" "}
          </p>
          <p className="Transation">
            <PaidIcon style={{ fontSize: "25px" }} />{" "}
            <span onClick={() => setActive("Transaction")}>Transation</span>{" "}
          </p>
          <p className="Sub_Admin">
            <SupervisorAccountIcon style={{ fontSize: "25px" }} />{" "}
            <span onClick={() => setActive("SubAdmin")}>Sub Admin</span>{" "}
          </p>
        </div>
      </div>
      <div className="Container">
        <div className="header">
          <button className="logout-btn">Logout</button>
          <AccountCircleIcon
            style={{ fontSize: "60px", marginRight: "20px", cursor: "pointer" }}
          />
        </div>
        <div className="main-content">
          {active === "Dashboard" && <Dashboard />}
          {active === "Categories" && <Categories />}
          {active === "Order" && <Order />}
          {active === "Stores" && <Stores />}
          {active === "User" && <User />}
          {active === "Drivers" && <Drivers />}
          {active === "Transaction" && navigate('/Transaction')}
          {active === "SubAdmin" && <SubAdmin />}
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;

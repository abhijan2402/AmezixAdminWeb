import React, { useEffect, useState } from "react";
import "./User.css";
import { getNotes } from "../../API";
import Filter from "../../Components/Filter/Filter";
import CancelIcon from "@mui/icons-material/Cancel";
import add from "../../assets/add.svg";
import Loader from "../../Components/Loader/Loader";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  let users_list = users.length;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNotes("storedetail");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="User-container">
      <div className="categoriefilter">
        <Filter />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="User-content">
            <div className="User">
              <h4>New Users</h4>
              <p>45</p>
            </div>
            <div className="User">
              <h4>Active Users</h4>
              <p>415</p>
            </div>
            <div className="User">
              <h4>Total Users</h4>
              <p>485</p>
            </div>
          </div>
          <div className="User-list">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>#Id</th>
                  <th>Mobile Number</th>
                  <th>Email Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Last Hight Amount</th>
                </tr>
                <tr>
                  <td>043</td>
                  <td>91735689478</td>
                  <td>xys@gmail.com</td>
                  <td>Ram</td>
                  <td>Jagathpura</td>
                  <td>425</td>
                  <p>
                    <CancelIcon />
                  </p>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="Useraddnewbtn">
            <button>
              Add New <img src={add} alt="" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default User;

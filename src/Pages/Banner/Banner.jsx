import React, { useState } from "react";
import "./Banner.css";
import Filter from "../../Components/Filter/Filter";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import UserBanner from "./UserBanner/UserBanner";

const Banner = () => {
  const [banner, setBanner] = useState("");
  return (
    <div>
      {banner === "userBanner" ? (
        <UserBanner />
      ) : (
        <>
          <div className="Bannercategoriefilter">
            <Filter />
          </div>
          <div className="Banner-content" id="list">
            <div className="Banners">
              <h4 onClick={() => setBanner("userBanner")}>User Banner</h4>
              <p>20</p>
            </div>
            <div className="Banners">
              <h4>Store Banner</h4>
              <p>15</p>
            </div>
            <div className="Banners">
              <h4>Delivery Boy</h4>
              <p>45</p>
            </div>
          </div>
          <div className="Banner-list">
            <table style={{ width: "100%" }}>
              <tr>
                <th>#Id</th>
                <th>Title</th>
                <th>Learn More</th>
                <th>Latest Update</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>01</td>
                <td>356</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>1425</td>
                <td>5784</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>
                  <CreateIcon id="createicon" />
                  <DeleteIcon id="deleteicon" />
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>5689</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>1235</td>
                <td>7854</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>
                  <CreateIcon id="createicon" />
                  <DeleteIcon id="deleteicon" />
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>9478</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>3452</td>
                <td>4520</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>
                  <CreateIcon id="createicon" />
                  <DeleteIcon id="deleteicon" />
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>917</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>4021</td>
                <td>5000</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>
                  <CreateIcon id="createicon" />
                  <DeleteIcon id="deleteicon" />
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>917</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>4021</td>
                <td>5000</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>
                  <CreateIcon id="createicon" />
                  <DeleteIcon id="deleteicon" />
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>917</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>4021</td>
                <td>5000</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>
                  <CreateIcon id="createicon" />
                  <DeleteIcon id="deleteicon" />
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>917</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>4021</td>
                <td>5000</td>
                <td>
                  <Switch />{" "}
                </td>
                <td>
                  <CreateIcon id="createicon" />
                  <DeleteIcon id="deleteicon" />
                </td>
              </tr>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;

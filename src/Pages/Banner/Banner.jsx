import React, { useState } from "react";
import "./Banner.css";
import Filter from "../../Components/Filter/Filter";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import UserBanner from "./UserBanner/UserBanner";
import EditModal from "./Modals/EditBanner/EditModal";
import StoreBanner from "./StoreBanner/StoreBanner";
import DeliveryBanner from "./DeliveryBanner/DeliveryBanner";

const Banner = () => {
  const [banner, setBanner] = useState("defaultBanner");
  const [editmodal, setEditModal] = useState(false);
  const closeEditModal = () => setEditModal(false);
  return (
    <div>
      {banner === "defaultBanner" && (
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
              <h4 onClick={() => setBanner("storeBanner")}>Store Banner</h4>
              <p>15</p>
            </div>
            <div className="Banners">
              <h4 onClick={() => setBanner("deliveryBanner")}>Delivery Boy</h4>
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
                  <CreateIcon
                    id="createicon"
                    onClick={() => setEditModal(true)}
                  />
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
                  <CreateIcon
                    id="createicon"
                    onClick={() => setEditModal(true)}
                  />
                  <DeleteIcon id="deleteicon" />
                </td>
              </tr>
            </table>
          </div>
          {editmodal && <EditModal closeEditModal={closeEditModal} />}
        </>
      )}

      {banner === "userBanner" && <UserBanner />}
      {banner === "storeBanner" && <StoreBanner />}
      {banner === "deliveryBanner" && <DeliveryBanner />}
    </div>
  );
};

export default Banner;

import React, { useState } from "react";
import "./Notification.css";
import Filter from "../../Components/Filter/Filter";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationModal from "./NotificationModal/NotificationModal";

const Notification = () => {
  const [notificationModal, setNotificationModal] = useState(false);

  const closeNotificationModal = () => setNotificationModal(false);

  return (
    <div>
      <div className="Notificationcategoriefilter">
        <Filter />
      </div>
      <div className="Notification-content" id="list">
        <div className="Notifications">
          <h4>User Notification</h4>
        </div>
        <div className="Notifications">
          <h4>Store Notification</h4>
        </div>
        <div className="Notifications">
          <h4>Delivery Notification</h4>
        </div>
      </div>
      <div className="Notification-list">
        <table style={{ width: "100%" }}>
          <tr>
            <th>#Id</th>
            <th>Title</th>
            <th>Latest Update</th>
            <th>
              Role <ArrowDropDownIcon id="arrow" />
            </th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>01</td>
            <td>356</td>
            <td>1425</td>
            <td>5784</td>
            <td>success </td>
            <td>
              <CreateIcon
                id="createicon"
                onClick={() => setNotificationModal(true)}
              />
              <DeleteIcon id="deleteicon" />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>356</td>
            <td>1425</td>
            <td>5784</td>
            <td>success </td>
            <td>
              <CreateIcon
                id="createicon"
                onClick={() => setNotificationModal(true)}
              />
              <DeleteIcon id="deleteicon" />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>356</td>
            <td>1425</td>
            <td>5784</td>
            <td>success </td>
            <td>
              <CreateIcon
                id="createicon"
                onClick={() => setNotificationModal(true)}
              />
              <DeleteIcon id="deleteicon" />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>356</td>
            <td>1425</td>
            <td>5784</td>
            <td>success </td>
            <td>
              <CreateIcon
                id="createicon"
                onClick={() => setNotificationModal(true)}
              />
              <DeleteIcon id="deleteicon" />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>356</td>
            <td>1425</td>
            <td>5784</td>
            <td>success </td>
            <td>
              <CreateIcon
                id="createicon"
                onClick={() => setNotificationModal(true)}
              />
              <DeleteIcon id="deleteicon" />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>356</td>
            <td>1425</td>
            <td>5784</td>
            <td>success </td>
            <td>
              <CreateIcon
                id="createicon"
                onClick={() => setNotificationModal(true)}
              />
              <DeleteIcon id="deleteicon" />
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>356</td>
            <td>1425</td>
            <td>5784</td>
            <td>success </td>
            <td>
              <CreateIcon
                id="createicon"
                onClick={() => setNotificationModal(true)}
              />
              <DeleteIcon id="deleteicon" />
            </td>
          </tr>
        </table>
      </div>
      {notificationModal && (
        <NotificationModal closeNotificationModal={closeNotificationModal} />
      )}
    </div>
  );
};

export default Notification;

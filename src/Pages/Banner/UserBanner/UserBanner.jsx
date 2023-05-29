import React, { useState } from "react";
import "./UserBanner.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Banner from "../Banner";
import Filter from "../../../Components/Filter/Filter";
import Modal from "../Modals/AddImage/bannerModal";
import EditModal from "../Modals/EditBanner/EditModal";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";

import pic from '../../../assets/banner.png'

const UserBanner = () => {
  const [backbanner, setbackBanner] = useState("");
  const [modal, setModal] = useState(false);
  const [editmodal, setEditModal] = useState(false);



  const closeModal = () => setModal(false);
  const closeEditModal = () => setEditModal(false)

  return (
    <div>
      {backbanner === "" ? (
        <>
          <div className="user-banner-header">
            <Filter />
            <p className="banner-para-header" >
              <ArrowBackIosIcon
                onClick={() => setbackBanner("backBanner")}
                id="backToBanner"
              />
              User Banner
            </p>
          </div>
          <div className="banner-content">
            <div className="user-banner-content">
              <div className="background-image">
                <button className="learn-more-btn">Learn More</button>
              </div>
              <div className="addicon" onClick={() => setModal(true)}>
                <AddIcon
                  style={{ color: "white" }}
                  
                />
              </div>             
            </div>
            
            <div className="UserBanner-list">
              <table style={{ width: "100%" }}>
                <tr>
                  <th>#Id</th>
                  <th>Title</th>
                  <th>Learn More</th>
                  <th>Latest Update</th>
                  <th>Images</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>356</td>
                  <td>
                    <Switch />
                  </td>
                  <td>1425</td>
                  <td><img src={pic} alt="" style={{width:"100px", height:'50px'}}/></td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <CreateIcon id="createicon" onClick={() => setEditModal(true)}/>
                    <DeleteIcon id="deleteicon" />
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>5689</td>
                  <td>
                    <Switch />
                  </td>
                  <td>1235</td>
                  <td><img src={pic} alt="" style={{width:"100px", height:'50px'}}/></td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <CreateIcon id="createicon" onClick={() => setEditModal(true)}/>
                    <DeleteIcon id="deleteicon" />
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>9478</td>
                  <td>
                    <Switch />
                  </td>
                  <td>3452</td>
                  <td><img src={pic} alt="" style={{width:"100px", height:'50px'}}/></td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <CreateIcon id="createicon" onClick={() => setEditModal(true)}/>
                    <DeleteIcon id="deleteicon" />
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>917</td>
                  <td>
                    <Switch />
                  </td>
                  <td>4021</td>
                  <td><img src={pic} alt="" style={{width:"100px", height:'50px'}}/></td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <CreateIcon id="createicon" onClick={() => setEditModal(true)}/>
                    <DeleteIcon id="deleteicon" />
                  </td>
                </tr>
              </table>
            </div>
           
          </div>
          {modal && <Modal closeModal={closeModal} />}
          {editmodal && <EditModal closeEditModal={closeEditModal} />}
        </>
      ) : (
        <Banner />
      )}
    </div>
  );
};

export default UserBanner;

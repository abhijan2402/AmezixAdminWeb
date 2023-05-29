import React, { useState } from "react";
import "./EditModal.css";
import Switch from "@mui/material/Switch";
import CloseIcon from '@mui/icons-material/Close';

const EditModal = ({ closeEditModal }) => {
  const [image, setIMage] = useState(null);
  const [fileName, setFileName] = useState("No selected File");
  return (
    <>
      <div className="banner-modal-container">
        <div className="EditModal-modal-wrapper"></div>
        <div className="EditModal-modal-container">
          <div className="EditModalclose-btn">
            <CloseIcon onClick={closeEditModal} id="closemodal-btn"/>
          </div>
          <div className="EditModal-modal-content">
            <form className="EditModal-modal-form">
              <div className="title">
                <label htmlFor="title-text">Title :</label>
                <input
                  type="text"
                  id="title-text"
                  placeholder="Enter the title"
                />
              </div>
              <div className="image-section">
                <label htmlFor="">Image :</label>
                <div
                  className="image-container"
                  onClick={() => document.querySelector(".input-field").click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="input-field"
                    hidden
                    onChange={({ target: { files } }) => {
                      files[0] && setFileName(files[0].name);
                      if (files) {
                        setIMage(URL.createObjectURL(files[0]));
                      }
                    }}
                  />
                  {image ? (
                    <img
                      src={image}
                      alt="File Image"
                    ></img>
                  ) : (
                    <h3 style={{cursor:"pointer", background:"#dfe6e9", padding:"8px"}}>Choose File</h3>
                  )}
                </div>
              </div>
              <div className="learn-more">
                <label htmlFor="">Learn More :</label>
                <p id="modalswitch"><Switch /></p>
                
              </div>
              <div className="youtubelink">
                <label htmlFor="" >Youtube Link :</label>
                <input type="text" placeholder="paste link here" id="paste-link"/>
              </div>
              <div className="modalsave-btn">
                <button className="save-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;


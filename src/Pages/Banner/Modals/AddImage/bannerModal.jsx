import React, { useState } from "react";
import "./bannerModal.css";
import Switch from "@mui/material/Switch";
import CloseIcon from '@mui/icons-material/Close';

const BannerModal = ({ closeModal }) => {
  const [image, setIMage] = useState(null);
  const [fileName, setFileName] = useState("No selected File");
  return (
    <>
      <div className="banner-modal-container">
        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <div className="close-btn">
            <CloseIcon onClick={closeModal} id="closemodal-btn"/>
          </div>
          <div className="modal-content">
            <form className="modal-form">
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

export default BannerModal;

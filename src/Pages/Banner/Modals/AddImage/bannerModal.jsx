import React, { useEffect, useState } from "react";
import moment from 'moment';
import "./bannerModal.css";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";

const BannerModal = ({ closeModal,role }) => {
  const [image, setIMage] = useState(null);
  const [fileName, setFileName] = useState("No selected File");
  // const [learnMore, setLearnMore] = useState();
  const [title, setTitle] = useState();
  const [link, setLink] = useState();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };
  useEffect(() => {
 console.log("role--", role);
  });

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      console.log("btn checked",checked);
      const response = await fetch(
        "http://ec2-3-108-56-128.ap-south-1.compute.amazonaws.com:8001/Banner",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Title: title,
            LearnMore: link,
            LearnMoreActive: checked,
            LastUpdate: moment().format('LL') ,
            Status: "active",
            Role: role,
            Image: fileName,
          }),
        }
      );
      const res = await response.json();
      console.log("hello", res);
      if (res.message === "You data is inserted") {
        console.log("hey!");
        closeModal();
      } else {
        console.log("hello!");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <div className="banner-modal-container">
        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <div className="close-btn">
            <CloseIcon onClick={() => closeModal()} id="closemodal-btn" />
          </div>
          <div className="modal-content">
            <div className="modal-form">
              <div className="title">
                <label htmlFor="title-text">Title :</label>
                <input
                  type="text"
                  id="title-text"
                  placeholder="Enter the title"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
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
                    <img src={image} alt="File_Image"></img>
                  ) : (
                    <h3
                      style={{
                        cursor: "pointer",
                        background: "#dfe6e9",
                        padding: "8px",
                      }}
                    >
                      Choose File
                    </h3>
                  )}
                </div>
              </div>
              <div className="learn-more">
                <label htmlFor="">Learn More :</label>
                <p id="modalswitch">
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </p>
              </div>
              <div className="youtubelink">
                <label htmlFor="">Youtube Link :</label>
                <input
                  type="text"
                  placeholder="paste link here"
                  id="paste-link"
                  name="youtubeLink"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="modalsave-btn">
                <button className="save-btn" onClick={handleSubmit}>
                  Save
                </button>
                
              </div>
              <button>tbn</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerModal;

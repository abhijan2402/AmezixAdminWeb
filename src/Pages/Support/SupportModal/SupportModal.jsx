import React, { useState } from "react";
import "./SupportModal.css";

import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const SupportModal = ({ closeSupportModal }) => {
  const [useChat, setuserChat] = useState("");

  const [chat, setChat] = useState([]);
  const handleChat = () => {
    const newMessage = {
      type: "Systemuser",
      text: useChat,
    };
    setChat([...chat, newMessage]);
    setuserChat("");
  };
  return (
    <>
      <div className="support-modal-container">
        <div className="support-modal-wrapper"></div>
        <div className="support-modal-container">
          <div className="support-btn">
            <CloseIcon onClick={closeSupportModal} id="closemodal-btn" />
          </div>
          <div className="support-modal-content">
            <form className="support-modal-form">
              <div className="orderId">
                <label htmlFor="orderId">Order Id : </label>
                <input type="text" id="orderId" placeholder="Order Id" />
              </div>
              <div className="personal-details">
                <div className="name">
                  <label htmlFor="name">Name : </label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="phone-number">
                  <label htmlFor="phone">Mobile No. : </label>
                  <input
                    type="number"
                    name="number"
                    id="phone"
                    placeholder="Mobile number"
                  />
                </div>
              </div>
              <hr />
              <div className="chat-container">
                <div className="chat-content">
                  <div className="chat-to-system">
                    <h5>Sir Where is my order</h5>
                  </div>
                  <div className="chat-to-system">
                    <h5>Sir Where is my order</h5>
                  </div>

                  {/* Mapping of Right-hand-Side Chats */}
                  {chat.map((message, index) => {
                    return (
                      <>
                        <div className="user-chat" key={index}>
                          <h5>{message.text}</h5>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="msg-box">
                  <div className="msg-area">
                    <textarea
                      name="txtmessages"
                      id=""
                      placeholder="send messages"
                      value={useChat}
                      onChange={(e) => setuserChat(e.target.value)}
                    ></textarea>
                    <SendIcon id="sendicon" onClick={handleChat} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportModal;

import React from 'react'
import './NotificationModal.css'

import CloseIcon from '@mui/icons-material/Close';

const NotificationModal = ({closeNotificationModal}) => {
  return (
    <>
      <div className="notification-modal-container">
        <div className="notification-modal-wrapper"></div>
        <div className="notification-modal-container">
          <div className="notification-btn">
            <CloseIcon onClick={closeNotificationModal} id="closemodal-btn"/>
          </div>
          <div className="notification-modal-content">
            <form className="notification-modal-form">
              <div className="notificationtitle">
                <label htmlFor="notificationtitle-text">Title :</label>
                <input
                  type="text"
                  id="notificationtitle-text"
                  placeholder="Enter the title"
                />
              </div>
              <div className="notificationtextarea">
                <label htmlFor="textarea">Descripition :</label>
                <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder='enter your descripition here'></textarea>
              </div>
              <div className="notificationyoutubelink">
                <label htmlFor="" >Youtube Link :</label>
                <input type="text" placeholder="paste link here" id="notificationpaste-link"/>
              </div>
              <div className="notificationmodalsave-btn">
                <button className="notificationsave-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotificationModal

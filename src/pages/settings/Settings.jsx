import React from "react";
import "./settings.css";
import Navbar from "../../components/navbar/Navbar";

const Settings = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="settingsCard">
          <label className="user" htmlFor="user">
            update your information
          </label>
          <form className="settingsForm" action="">
            <input type="text" placeholder="name" className="settingsName" />
            <input type="email" placeholder="email" className="settingsEmail" />
            <input
              type="text"
              placeholder="username"
              className="settingUsername"
            />
          </form>
          <span className="settingsSpan">
            <img
              src="https://i.pinimg.com/736x/51/8f/69/518f692f8d06d20fb1fe4d09804714c4.jpg"
              alt=""
              className="settingsImg"
            />
            <label htmlFor="picUpdate" id="user">
              <i className="fa-solid fa-upload"></i>
              update profile picture
            </label>
            <input
              type="file"
              id="picUpdate"
              className="profilePic"
              style={{ display: "none" }}
            />
          </span>
          <button className="settingsBtn">save changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

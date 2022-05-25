import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="nav">
          <div className="navMain">
            <div className="leftNav">
              <Link to='/'>
                <div className="logo">📰</div>
              </Link>
              <div className="searchDiv">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search" className="search" />
              </div>
            </div>
            <div className="rightNav">
              <Link to='/login'>
                <button className="navLogin">login</button>
              </Link>
              <Link to='/register'>
                <button className="navRegister">create account</button>
              </Link>
              <Link to='/new'>
                <button className="navBtn">create post</button>
              </Link>
              <span className="navImgSpan">
                <img
                  className="navImg"
                  src="https://i.pinimg.com/736x/67/19/b9/6719b92479b6814464fd83a117a9a243.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

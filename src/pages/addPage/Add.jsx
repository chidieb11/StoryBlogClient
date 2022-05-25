import React from "react";
import "./add.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const Add = () => {
    return (
        <div className="addContainer">
            <div className="addCard">
                <label htmlFor="fileInput" className="upload">
                    <i className="fa-solid fa-upload"></i>
                    Upload an image
                </label>
                <input type="file" id="fileInput" className="newFile" style={{display: "none"}}/>
                <input type="text" className="newInputTitle" placeholder="New post title here..."/>
                <SunEditor className="sunEditor"/>
                <button className="addBtn">publish</button>
            </div>
        </div>
    );
};

export default Add;

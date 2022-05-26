import React from "react";
import "./add.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import Navbar from "../../components/navbar/Navbar"; // Import Sun Editor's CSS File

const Add = () => {
    return (
        <>
            <Navbar/>
            <div className="addContainer">
                <div className="addCard">
                    <form>
                        <img src="https://i.pinimg.com/564x/21/8c/bc/218cbcd410d9a930e1c03bb97bef10ba.jpg" alt=""
                             className="addImg"/>
                        <label htmlFor="fileInput" className="upload">
                            <i className="fa-solid fa-upload"></i>
                            Upload an image
                        </label>
                        <input type="file" id="fileInput" className="newFile" style={{display: "none"}}/>
                        {/*<input type="text" className="newInputTitle" placeholder="New post title here..."/>*/}
                        <SunEditor placeholder="Create new post title and body here..." className="sunEditor"/>
                        <button className="addBtn">publish</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Add;

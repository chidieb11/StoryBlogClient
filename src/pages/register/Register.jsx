import React from "react";
import "./register.css";
import Navbar from "../../components/navbar/Navbar";

const Register = () => {
    return (
        <>
            <Navbar/>
            <div className="registrationContainer">
                <div className="regCard">
                    <form className="regForm">
                        <input type="text" placeholder="name" className="regName"/>
                        <input type="text" placeholder="username" className="regUsername"/>
                        <input type="password" placeholder="password" className="regPassword"/>
                        <input type="email" placeholder="email" className="regEmail"/>
                        <button className="regBtn">register</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;

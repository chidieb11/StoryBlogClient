import React from "react";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
    return (
        <>
            <Navbar/>
            <div className="loginContainer">
                <div className="loginCard">
                    <form className="loginForm">
                        <input type="text" placeholder="username" className="loginUsername"/>
                        <input type="password" placeholder="password" className="loginPassword"/>
                        <button className="loginBtn">login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;

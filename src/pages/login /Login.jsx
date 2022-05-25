import React from "react";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <Navbar/>
            <div className="loginContainer">
                <div className="loginCard">
                    <form className="loginForm">
                        <input type="text" placeholder="username" className="loginUsername"/>
                        <input type="password" placeholder="password" className="loginPassword"/>
                        <p>
                            Don't have an account? Register
                            <Link to="/register">
                                here
                            </Link>
                        </p>
                        <button className="loginBtn">login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;

import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-overlay">
            <div className="login-card">
                <span className="close-btn">×</span>

                <h2>Login</h2>
                <p className="subtitle">
                    New to Tech-Shop? <span>Create an account</span>
                </p>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button className="login-btn">Login</button>

                <div className="divider">
                    <span>or login with</span>
                </div>

                <div className="social-buttons">
                    <button className="facebook">Facebook</button>
                    <button className="google">Google</button>
                    <button className="twitter">Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default Login

import React, { useState } from "react";
import "./login.css"; // for custom styles
import { useNavigate } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";
import txlogo from "../../assets/txlogo.png"; // replace with actual logo path
import googleicon from "../../assets/GoogleIcon.png"; // replace with actual logo path
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-page">
            <div className="d-flex justify-content-between align-items-center p-4">
                <img src={txlogo} alt="TechXplorers Logo" style={{ height: "50px" }} />
                <div>
                    <span className="me-2 text-primary">Don’t Have An Account?</span>
                    <button onClick={() => navigate('/signup')} className="btn btn-primary btn-sm rounded-pill">Sign Up</button>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center vh-95">
                <div className="shadow-lg p-5 rounded bg-white login-box">
                    <h3 className="text-center fw-bold mb-3">Welcome back !</h3>
                    <button className="btn btn-light w-100 border mb-3 d-flex align-items-center justify-content-center gap-2">
                        <FcGoogle size={20} />

                        Continue With Google</button>
                    <div className="text-center text-muted mb-2">──────── OR ────────</div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <div className="input-group">
                            <span className="input-group-text"><MdEmail /></span>
                            <input type="email" className="form-control" placeholder="Enter Your Email" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                            <span className="input-group-text"><RiLockPasswordFill /></span>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter Password"
                            />
                            <span
                                className="input-group-text"
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </span>
                        </div>
                    </div>

                    <button onClick={() => navigate('/Dashboard')} className="btn btn-info w-100 text-white fw-bold">Log In</button>

                    <div className="text-center mt-3">
                        <span className="me-1 text-muted">Don’t Have An Account?</span>
                        <a onClick={() => navigate('/signup')} className="text-primary text-decoration-none">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import "./SignUp.css";
import txlogo from "../../assets/txlogo.png"; // replace with actual logo path
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignupPage() {
        const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div className="signup-page">
            <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex align-items-center gap-2">
                    <img src={txlogo} alt="TechXplorers" style={{ height: "50px" }} />
                    {/* <div>
            <div className="fw-bold">TECHXPLORERS</div>
            <small>Exploring The Future</small>
          </div> */}
                </div>
                <div>
                    <span className="me-2 text-primary">Have An Account?</span>
                    <button className="btn btn-primary btn-sm rounded-pill">Login</button>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center vh-90">
                <div className="shadow-lg p-5 rounded bg-white signup-box">
                    <h3 className="text-center fw-bold mb-3">Let’s sign up!</h3>

                    <button className="btn btn-light w-100 border mb-3 d-flex align-items-center justify-content-center gap-2">
                        <FcGoogle size={20} />
                        Continue With Google
                    </button>

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

                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text"><RiLockPasswordFill /></span>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Confirm Password"
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

                    <button className="btn btn-info w-100 text-white fw-bold">Sign Up</button>

                    <div className="text-center mt-3">
                        <span className="me-1 text-muted">Have An Account?</span>
                        <a href="#" className="text-primary text-decoration-none">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

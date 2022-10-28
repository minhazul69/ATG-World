import React, { useState } from "react";
import facebookLogo from "../../../Image/f_logo_RGB-Blue_1024.png";
import googleLogo from "../../../Image/google.svg";
import loginImg from "../../../Image/login-img.png";
const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="modal-content">
      <div className="modal-header modal-bg">
        <div className="mx-auto">
          <h5 className=" b" id="exampleModalLabel">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h5>
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ fontWeight: "bold" }} className=" mb-4">
              Sign In
            </h4>
            <form action="#">
              <input
                type="email"
                className="form-control shadow-none rounded-0"
                placeholder="Email"
                aria-label="Server"
              />
              <div className="position-relative">
                <input
                  className="form-control shadow-none rounded-0"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                {showPass ? (
                  <i
                    onClick={() => setShowPass(false)}
                    style={{
                      top: 20,
                      right: 25,
                      transform: "translateY(-50%)",
                    }}
                    className="fa-solid fa-eye-low-vision position-absolute d-block cursor-pointer"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPass(true)}
                    style={{
                      top: 20,
                      right: 25,
                      transform: "translateY(-50%)",
                    }}
                    className="fa-solid fa-eye swap-off position-absolute d-block cursor-pointer "
                  ></i>
                )}
              </div>
              <button
                className="btn btn-primary w-100 mt-3 rounded-pill py-2"
                type="button"
              >
                Create Account
              </button>
              <br />
              <div className="mt-3 text-center">
                <button type="button" className="btn btn-light w-100 border">
                  <img
                    src={facebookLogo}
                    style={{ width: "25px", height: "25px" }}
                    className="img-fluid"
                    alt=""
                  />{" "}
                  Sign Up With Facebook
                </button>
                <br />
                <button
                  type="button w-100"
                  className="btn btn-light  w-100 mt-2 mb-3 border"
                >
                  <img
                    style={{ width: "25px", height: "25px" }}
                    src={googleLogo}
                    className="img-fluid"
                    alt=""
                  />{" "}
                  Sign Up With Facebook
                </button>
                <br />
                <a
                  style={{ fontWeight: 600, color: "black" }}
                  href="#"
                  className=" text-decoration-none "
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <p
              className="text-center"
              style={{
                fontSize: "13px",
                marginRight: "20px",
              }}
            >
              Don’t have an account yet?{" "}
              <a
                href="/signIn"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
              >
                Create new for free!
              </a>
            </p>
            <div className="d-flex justify-content-evenly">
              <img src={loginImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

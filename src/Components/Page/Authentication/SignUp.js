import React, { useState } from "react";
import facebookLogo from "../../../Image/f_logo_RGB-Blue_1024.png";
import googleLogo from "../../../Image/google.svg";
import loginImg from "../../../Image/login-img.png";

const SignUp = () => {
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
              Create Account
            </h4>
            <form action="#">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control shadow-none rounded-0"
                  placeholder="First Name"
                  aria-label="Username"
                />
                <input
                  type="text"
                  className="form-control shadow-none rounded-0"
                  placeholder="Last Name"
                  aria-label="Server "
                />
              </div>
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
              <input
                type={showPass ? "text" : "password"}
                className="form-control shadow-none rounded-0"
                placeholder="Confirm Password"
                aria-label="Server"
              />

              <button
                className="btn btn-primary w-100 mt-3 rounded-pill py-2"
                type="button"
              >
                Create Account
              </button>
              <br />
              <div className="mt-3">
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
                  className="btn btn-light  w-100 mt-2 border"
                >
                  <img
                    style={{ width: "25px", height: "25px" }}
                    src={googleLogo}
                    className="img-fluid"
                    alt=""
                  />{" "}
                  Sign Up With Facebook
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <p
              className="text-center "
              style={{
                fontSize: "13px",
                marginRight: "20px",
              }}
            >
              Already have an account?{" "}
              <a
                href="/signIn"
                data-bs-toggle="modal"
                data-bs-target="#signInModal"
              >
                Sign In
              </a>
            </p>
            <div className="d-flex justify-content-evenly">
              <img src={loginImg} className="img-fluid" alt="" />
            </div>
            <p style={{ fontSize: "11px" }} className="mt-5 ">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import facebookLogo from "../../../Image/f_logo_RGB-Blue_1024.png";
import googleLogo from "../../../Image/google.svg";
const SignIn = () => {
  return (
    <div class="modal-content">
      <div class="modal-header modal-bg">
        <div className="mx-auto">
          <h5 class=" b" id="exampleModalLabel">
            {/* Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼 */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            minus, sed ab cum ipsam odit quam fugiat laudantium repudiandae
            dolorem corporis autem, libero magni atque. Obcaecati provident
            consequatur incidunt debitis!
          </h5>
        </div>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div className="row">
          <div className="col-md-6">
            <h4 className="font-weight-bold mb-4">Create Account</h4>
            <form action="#">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control shadow-none"
                  placeholder="First Name"
                  aria-label="Username"
                />
                <input
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Last Name"
                  aria-label="Server "
                />
              </div>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Email"
                aria-label="Server"
              />
              <input
                type="text"
                class="form-control shadow-none mt-2"
                placeholder="Password"
                aria-label="Server"
              />

              <input
                type="text"
                class="form-control shadow-none mt-2"
                placeholder="Confirm Password"
                aria-label="Server"
              />

              <button
                class="btn btn-primary w-100 mt-2 rounded-pill py-2"
                type="button"
              >
                Create Account
              </button>
              <br />
              <div className="mt-3">
                <button type="button" class="btn btn-light w-100 border">
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
                  class="btn btn-light  w-100 mt-2 border"
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
              style={{
                fontSize: "13px",
                textAlign: "right",
                marginRight: "20px",
              }}
            >
              Already have an account?
              <a
                href="/signIn"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
              >
                Sign Up
              </a>
            </p>
            <img
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1659710327~exp=1659710927~hmac=61c9618e3381ffe9a9d6ce52cda28050bfa8491f09ebf3feb7a2631cdafac674"
              className="img-fluid"
              alt=""
            />
            <p style={{ fontSize: "11px" }}>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

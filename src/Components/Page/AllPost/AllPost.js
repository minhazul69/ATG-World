import React, { useState } from "react";
import "./AllPost.css";
const allPost = [
  {
    _id: 1,
    postImg: "https://i.ibb.co/MnLfS47/Rectangle-5.png",
    postType: "✍️ Article",
    postTitle: "What if famous brands had regular fonts? Meet RegulaBrands!",
    postMessage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    postUserImg: "https://i.ibb.co/YtbCYXk/Rectangle-3.png",
    postUserName: "Sarthak Kamra",
    postView: "1.4k views",
  },
  {
    _id: 2,
    postImg: "https://i.ibb.co/pvPxVss/Rectangle-5-1.png",
    postType: "🔬️ Education",
    postTitle:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    postMessage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    postUserImg: "https://i.ibb.co/nCrt7bN/Rectangle-3-1.png",
    postUserName: "Sarah West",
    postView: "1.4k views",
  },
  {
    _id: 3,
    postImg: "https://i.ibb.co/M8PK98B/Rectangle5.png",
    postType: "🗓️ Meetup",
    postTitle: "Finance & Investment Elite Social Mixer @Lujiazui",
    postDate: "Fri, 12 Oct, 2018",
    postLocation: "Ahmedabad, India",
    postUserImg: "https://i.ibb.co/X3kc1mQ/Rectangle-3-2.png",
    postUserName: "Ronal Jones",
    postView: "1.4k views",
    button: "Visit Website",
  },
  {
    _id: 4,
    postType: "💼️ Job",
    postTitle: "Software Developer",
    postCompany: "Innovaccer Analytics Private Ltd.",
    postLocation: "Noida, India",
    postUserImg: "https://i.ibb.co/jTNw8M5/Rectangle-3-3.png",
    postUserName: "Joseph Gray",
    postView: "1.4k views",
    button: "Apply on Timesjobs",
  },
];
const AllPost = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container px-4">
      <div className="row">
        <div className="d-none d-lg-block">
          <div className="d-flex align-items-center justify-content-between pt-4 ">
            <ul className="nav">
              <li className="nav-item border-bottom border-4 border-dark pb-2">
                <a className="nav-link text-dark fs-5 " href="#">
                  All Posts(32)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fs-5" href="#">
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fs-5" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fs-5" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fs-5" href="#">
                  Job
                </a>
              </li>
            </ul>
            <div className="pb-2">
              <button className=" me-3 btn-post">
                Write a Post <i class="fa-solid fa-caret-down ps-2"></i>
              </button>
              <button className=" btn-join">
                +<i class="fa-solid fa-user-group "></i> Join Group
              </button>
            </div>
          </div>
          <div style={{ transform: "translateY(-18px)" }}>
            <hr style={{ height: "2px" }} />
          </div>
        </div>
        <div className="col-md-8">
          {allPost.map((post) => (
            <div class="card mt-3" key={post._id}>
              {post.postImg && (
                <img src={post.postImg} class="card-img-top" alt="..." />
              )}
              <div class="card-body">
                <h5 class="card-title fs-4 my-3">{post.postType}</h5>
                <div className="d-flex justify-content-between">
                  <h3 className=" fw-bold">{post.postTitle}</h3>
                  <div className="px-2 position-relative">
                    <button
                      onClick={() => setShow(!show)}
                      className="btn border-0 "
                    >
                      <i class="fa-solid fa-ellipsis fs-3"></i>
                    </button>
                    {show && (
                      <ul className="menu-dropdown position-absolute shadow ">
                        <li>
                          <a href="">Edit</a>
                        </li>
                        <li>
                          <a href="">Report</a>
                        </li>
                        <li>
                          <a href="">Option 3</a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="d-flex align-items-center my-2">
                  {post.postDate && (
                    <h6 className="me-5">
                      <i class="fa-solid fa-calendar-day"></i> {post.postDate}
                    </h6>
                  )}
                  {post.postCompany && (
                    <h6 className="me-5">
                      <i class="fa-solid fa-briefcase me-1"></i>
                      {post.postCompany}
                    </h6>
                  )}
                  <h6>
                    <i class="fa-solid fa-location-dot"></i> {post.postLocation}
                  </h6>
                </div>
                {post.button && (
                  <div>
                    <button
                      className={`btn w-100 border border-secondary fw-bold py-2 ${
                        post.button === "Visit Website"
                          ? "text-danger"
                          : "text-other"
                      }`}
                    >
                      {" "}
                      {post.button}
                    </button>
                  </div>
                )}
                {post.postMessage && (
                  <p class="card-text fs-5 text-secondary my-1">
                    {post.postMessage}
                  </p>
                )}
                <div className="pt-4 pb-1 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={post.postUserImg} className="img-fluid" alt="" />
                    <h5 className="ms-2 fw-bold">{post.postUserName}</h5>
                  </div>

                  <div className="d-flex align-items-center ">
                    <div>
                      <i class="fa-solid fa-eye me-2"></i> {post.postView}
                    </div>
                    <button className="share-btn ms-5 me-2">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default AllPost;

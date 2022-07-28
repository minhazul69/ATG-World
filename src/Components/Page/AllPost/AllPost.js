import React from "react";
import "./AllPost.css";
const Allpost = [
  {
    _id: 1,
    postImg: "../../../Image/Rectangle 3 (3).png",
    postType: "✍️ Article",
    postTitle: "What if famous brands had regular fonts? Meet RegulaBrands!",
    postMessage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    postUserImg: "../../../Image/Rectangle 3 (1).png",
    postUserName: "Sarthak Kamra",
    postView: "1.4k views",
  },
  {
    _id: 2,
    postImg: "../../../Image/Rectangle 3 (3).png",
    postType: "🔬️ Education",
    postTitle:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    postMessage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    postUserImg: "../../../Image/Rectangle 3 (1).png",
    postUserName: "Sarah West",
    postView: "1.4k views",
  },
  {
    _id: 3,
    postImg: "../../../Image/Rectangle 3 (3).png",
    postType: "🗓️ Meetup",
    postTitle: "Finance & Investment Elite Social Mixer @Lujiazui",
    postDate: "Fri, 12 Oct, 2018",
    postLocation: "Ahmedabad, India",
    postUserImg: "../../../Image/Rectangle 3 (1).png",
    postUserName: "Ronal Jones",
    postView: "1.4k views",
  },
  {
    _id: 4,

    postType: "💼️ Job",
    postTitle: "Software Developer",
    postCompany: "Innovaccer Analytics Private Ltd.",
    postLocation: "Noida, India",
    postUserImg: "../../../Image/Rectangle 3 (1).png",
    postUserName: "Joseph Gray",
    postView: "1.4k views",
  },
];
const AllPost = () => {
  return (
    <div className="container px-4">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between py-4">
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
        <div style={{ transform: "translateY(-41px)" }}>
          <hr style={{ height: "2px" }} />
        </div>
        <div className="col-md-8"></div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default AllPost;

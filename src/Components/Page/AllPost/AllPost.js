import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
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
const fakeGroupData = [
  {
    _id: 1,
    groupImg: "https://i.ibb.co/LRNsZNc/Rectangle-6.png",
    groupName: "Leisure",
  },
  {
    _id: 2,
    groupImg: "https://i.ibb.co/HHNN5kQ/Rectangle-6-2.png",
    groupName: "Activism",
  },
  {
    _id: 3,
    groupImg: "https://i.ibb.co/Zh9m9Z2/Rectangle-6-3.png",
    groupName: "MBA",
  },
  {
    _id: 4,
    groupImg: "https://i.ibb.co/zxjgK04/Rectangle-6-2.png",
    groupName: "Philosophy",
  },
];
const AllPost = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container px-lg-4">
      <div className="row p-md-0">
        <div className="">
          <div className="d-flex align-items-center justify-content-between p-3">
            <div>
              <a className="nav-link fw-bold fs-6" href="">
                Posts(368)
              </a>
            </div>
            <div>
              <button className="filter-btn btn border-0">
                Filter:All <i class="fa-solid fa-caret-down ps-3"></i>
              </button>
            </div>
          </div>
        </div>
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
                  <h3 className="post-title fw-bold">{post.postTitle}</h3>
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
                    <>
                      <h6 className="me-5 d-lg-none">
                        <i class="fa-solid fa-briefcase me-1"></i>
                        {post.postCompany.slice(0, 20) + "..."}
                      </h6>
                      <h6 className="me-5 d-none d-lg-block">
                        <i class="fa-solid fa-briefcase me-1"></i>
                        {post.postCompany}
                      </h6>
                    </>
                  )}
                  {post.postLocation && (
                    <h6>
                      <i class="fa-solid fa-location-dot"></i>{" "}
                      {post.postLocation}
                    </h6>
                  )}
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
                  <h5 class=" card-text post-message text-secondary my-1">
                    {post.postMessage}
                  </h5>
                )}

                {/* POST NOW BUTTON */}
                <a href="" id="post-now">
                  <i class="fa-solid fa-pen"></i>
                </a>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                      <div class="modal-header modal-bg">
                        <h5 class=" b" id="exampleModalLabel">
                          Let's learn, share & inspire each other with our
                          passion for computer engineering. Sign up now 🤘🏼
                        </h5>
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
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nemo distinctio laboriosam ea soluta officia
                              quidem est expedita. Quia, ullam totam veritatis
                              praesentium quaerat laudantium impedit ab quas,
                              voluptatem numquam animi deleniti eveniet
                              molestias mollitia id quod! Molestias sequi
                              voluptate fugit laudantium odit est provident ab.
                              Molestiae iure tempora corporis doloribus quam
                              culpa animi, eum ipsum, eaque quia neque, fugit
                              odio dolorum ullam officia reprehenderit nihil.
                              Nobis voluptate iste laudantium ipsa laborum! Non
                              quo, doloremque nobis porro blanditiis culpa
                              accusantium repellendus enim autem in itaque sint
                              voluptatibus optio vel, sit ducimus ipsum magni
                              est fugiat reprehenderit corporis consequuntur
                              voluptatum a. Tenetur?
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Beatae officiis cum repellat. In, quos
                              dolorum quae sapiente vel, provident iusto esse,
                              delectus rem quidem temporibus earum ipsa? Totam
                              alias non accusamus aspernatur inventore quas
                              soluta, nisi ipsum mollitia vel libero, facilis
                              consequuntur sint, perferendis debitis veritatis
                              qui facere et? Rerum sunt, dolorum laboriosam
                              culpa, reprehenderit autem doloribus repellat
                              tempora voluptatem similique necessitatibus in
                              iste consequuntur! Eveniet, sequi hic est a totam
                              labore laudantium modi excepturi neque
                              exercitationem quam sunt dolorum doloribus quis
                              rem accusamus harum. Odio debitis provident et in
                              enim laboriosam mollitia. Iure sequi sapiente
                              repudiandae ut autem voluptas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-1 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={post.postUserImg} className="img-fluid" alt="" />
                    <div className="ms-2">
                      <h5 className=" fw-bold">{post.postUserName}</h5>
                      <p className="p-0 m-0 d-lg-none">{post.postView}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center ">
                    <div className="d-none d-lg-block">
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
        <div className="col-md-4 ps-5 d-none d-lg-block">
          <div className="d-flex align-items-center justify-content-between mt-5">
            <div>
              <h5>
                <i class="fa-solid fa-location-dot"></i> Noida, India
              </h5>
            </div>
            <div>
              <i class="fa-solid fa-pen"></i>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="d-flex mt-5">
            <div className="me-2">
              <i class="fa-solid fa-circle-info text-secondary"></i>
            </div>
            <div>
              <p className="m-0 text-secondary">
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
          </div>
          <div>
            <h5 className="mt-5">
              <i class="fa-solid fa-thumbs-up"></i> REcommended Groups
            </h5>
            <div className="mt-3">
              {fakeGroupData.map((group) => (
                <div
                  key={group._id}
                  className="d-flex align-items-center justify-content-between mt-4"
                >
                  <div className="d-flex align-items-center">
                    <img src={group.groupImg} className="img-fluid" alt="" />
                    <h5 className="ms-3">{group.groupName}</h5>
                  </div>
                  <div>
                    <button className=" follow-btn">Follow</button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-end mt-5">
              <a className="text-decoration-none" href="">
                See More...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPost;

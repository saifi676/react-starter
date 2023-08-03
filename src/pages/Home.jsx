import React from "react";
import Postcard from "../components/Postcard";
import WorklistItem from "../components/WorklistItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const postList = [
  {
    heading: "Making a design system from scratch",
    date: "12 aug 2020",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    heading: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
sint. Velit officia consequat duis enim velit mollit. Exercitation
veniam consequat sunt nostrud amet.`,
  },
];

const Worklist = [
  {
    heading: "Designing Dashboards",
    year: "2020",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    amet sint. Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.`,
    image:
      "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/7ENP6HRLDBEGROQ7MMAMI5FPRA.png",
  },
  {
    heading: "Vibrant Portraits of 2020",
    year: "2018",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    amet sint. Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTam4Wv0nuDyHD_8YeT35g1d06NOHJ-swhOw&usqp=CAU",
  },
  {
    heading: "36 Days of Malayalam type",
    year: "2018",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    amet sint. Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.`,
    image:
      "https://1fid.com/wp-content/uploads/2022/03/a-name-stylish-wallpaper-image-6-1024x1022.jpg",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <section className="header">
        <header>
          <span>Works Blog Contact</span>
        </header>
      </section>
      <img
        className="image"
        src="https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png"
        alt=""
      />
      <section>
        <h2 className="heading">Hi, I am John, Creative Technologist</h2>
      </section>
      <section className="paragraph">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </section>
      <button className="button">Download Resume</button>
      <section className="section-post">
        <div className="post-heading">
          <h5> Recent Posts</h5>
        </div>
        <div className="postlist-container">
          {postList.map((post) => {
            return (
              <Postcard
                heading={post.heading}
                date={post.date}
                description={post.description}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h5 className="featured">Featured works</h5>
        {Worklist.map((list) => {
          return (
            <WorklistItem
              heading={list.heading}
              year={list.year}
              image={list.image}
              description={list.description}
            />
          );
        })}
      </section>
      <section className="footer">
        <div></div>
        <div className="icon-footer">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
        <p className="paragraph-footer">Copyright ©2020 All rights reserved </p>
      </section>
    </div>
  );
};

export default Home;

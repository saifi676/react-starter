import React from "react";
import Postcard from "../components/Postcard";
import WorklistItem from "../components/WorklistItem";
import HeaderItem from "../components/Header";
import Footer from "../components/Footer";
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
      "/assets/dashboard-image.png",
  },
  {
    heading: "Vibrant Portraits of 2020",
    year: "2018",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    amet sint. Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.`,
    image: "/assets/girl-image2.png",
  },
  {
    heading: "36 Days of Malayalam type",
    year: "2018",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    amet sint. Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.`,
    image:
      "/assets/girl-image.png",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <HeaderItem />
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
      <Footer />
    </div>
  );
};

export default Home;

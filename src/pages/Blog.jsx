import React from "react";
import Weeklist from "../components/Weeklist";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const bloglist = [
  {
    heading: "UI Interactions of the week",
    date: "12 Feb 2019",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    heading: "UI Interactions of the week",
    date: "12 Feb 2019",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    heading: "UI Interactions of the week",
    date: "12 Feb 2019",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
  {
    heading: "UI Interactions of the week",
    date: "12 Feb 2019",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit. Exercitation
  veniam consequat sunt nostrud amet.`,
  },
];
const Blog = () => {
  return (
    <div className="home-container">
      <header className="header"> Blog Works Contact</header>
      <h1 className="blog-heading">Blog</h1>
      {bloglist.map((list) => {
        return (
          <Weeklist
            heading={list.heading}
            date={list.date}
            description={list.description}
            horizontalline={list.horizontalline}
          />
        );
      })}
      <section className="footer-section">
        
        <div >
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
        
      </section>
      <p className="p-footer">Copyright ©2020 All rights reserved </p>
    </div>
    
  );
};

export default Blog;

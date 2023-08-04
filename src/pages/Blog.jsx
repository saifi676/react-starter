import React from "react";
import Weeklist from "../components/Weeklist";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderItem from "../components/Header";
import Footer from "../components/Footer";
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
      <HeaderItem />
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
      <Footer />
    </div>
  );
};

export default Blog;

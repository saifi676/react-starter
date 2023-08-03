import React from "react";
import ListWorks from "../components/ListWorks";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
  {
    heading: "Components",
    year: "2018",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.`,
    image:
      "https://media.istockphoto.com/id/953200950/photo/printed-circuit-board-and-capacitor.jpg?s=170667a&w=is&k=20&c=321tfC810HiRj-GeKaY5TPxHafvlD_D7F_wWxzLXhBs=",
  },
];
const Works = () => {
  return (
    <div className="home-container">
      <header className="header"> Blog Works Contact</header>
      <h1 className="work-heading">Works</h1>
      {Worklist.map((list) => {
        return (
          <ListWorks
            heading={list.heading}
            year={list.year}
            image={list.image}
            description={list.description}
            horizontalline={list.horizontalline}
          />
        );
      })}
      <section className="footer-works">
        <div className="icon-footerwork">
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

export default Works;

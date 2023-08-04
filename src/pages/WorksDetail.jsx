import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ImagelistDetail from "../components/ImagelistDetail";
import HeaderItem from "../components/Header"
import Footer from "../components/Footer";
const imagelist = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/008/295/031/original/custom-relationship-management-dashboard-ui-design-template-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-free-vector.jpg",
  },
  {
    image: "https://wallpaperaccess.com/full/470229.jpg",
  },
  {
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e25e7a101497355.5f204c8cb064d.png",
  }, 
];
const WorksDetail = () => {
  return (
    <div className="home-container">
      <HeaderItem/> 
      <h1 className="workdetail-heading">
        Designing Dashboards with usability in mind
      </h1>
      <div className="work-div">
        <p className="workdetail-p1"> 2020</p>
        <p className="workdetail-p2"> Dashboard, User Experience Design</p>
      </div>
      <p className="para-work">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      {imagelist.map((list) => {
        return <ImagelistDetail image={list.image} />;
      })}
      <Footer/>
    </div>
  );
};

export default WorksDetail;

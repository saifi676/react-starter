import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <nav className="icon-footer">
          <NavLink target="_blank" to="https://www.facebook.com/">
            <FacebookIcon />{" "}
          </NavLink>

          <NavLink target="_blank" to="https://www.instagram.com/">
            <InstagramIcon />{" "}
          </NavLink>

          <NavLink target="_blank" to="https://twitter.com/">
            <TwitterIcon />{" "}
          </NavLink>

          <NavLink target="_blank" to="https://www.google.com/">
            {" "}
            <LinkedInIcon />{" "}
          </NavLink>
        </nav>
        <p className="paragraph-footer">Copyright ©2020 All rights reserved </p>
      </section>
    </div>
  );
};

export default Footer;

import React from "react";

const Postcard = ({ heading, date, description }) => {
  return (
    <div className="post-list">
      <h2 className="heading2">{heading}</h2>
      <p className="para">{date}</p>
      <p className="para">{description}</p>
      
    </div>
  );
};

export default Postcard;

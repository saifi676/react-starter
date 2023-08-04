import React from 'react'


const WorklistItem = ({heading,year,image,description,horizontalline}) => {
  return (
    <div className="section-feature">
          <img
            className="image-feature"
            src={image}
          />
          <div>
            <h1 className="heading-featured">{heading}</h1>
            <p className="para-feature">{year}</p>
            <p className="para1-feature">
              {description}
            </p>
            <hr />{horizontalline}
          </div>
        </div>
  )
}

export default WorklistItem
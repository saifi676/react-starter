import React from 'react'

const ListWorks = ({heading,year,image,description,horizontalline}) => {
  return (
    <div className="work-list">
          <img
            className="image-works"
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

export default ListWorks
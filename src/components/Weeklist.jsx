import React from 'react'

const Weeklist = ({heading,date,description,horizontalline}) => {
  return (
    <div>
    <h1 className="blog-h1">{heading}</h1>
    <p className="date">{date}</p>
    <p className="paragraph-b">
      {description}
    </p>
    <hr className='horizontal-line'/>{horizontalline}
    
  </div>
  )
}

export default Weeklist
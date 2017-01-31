import React from 'react'

export const Project = (props) => {
  return (
  <div className="col-md-6 portfolio-item project">
    <a href="#">
      <img className="img-responsive" src={props.image} alt="" />
    </a>
    <h3>
      <a href="#">{props.name}</a>
    </h3>
    <p>{props.description}</p>
  </div>
)}

Project.propTypes = {
  name : React.PropTypes.string.isRequired,
  description : React.PropTypes.string.isRequired,
  image : React.PropTypes.string.isRequired,
  url: React.PropTypes.string
}

export default Project

import React from 'react'

export const Project = (props) => {
  return (
  <div className="col-md-6 portfolio-item project">
    <a href="#">
      <img className="img-responsive" src="http://placehold.it/700x400" alt="" />
    </a>
    <h3>
      <a href="#">{props.name}</a>
    </h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
  </div>
)}

Project.propTypes = {
  name     : React.PropTypes.string.isRequired
}

export default Project

import React, {PropTypes} from 'react'
import Project from './Project'

//Use a functional component, because this is a presentational component (props are passed in- it doesn't access redux state directly).
const ProjectList = function(props){
  return (
    <div className="projects">
      {props.projects.map( (project) => (<Project key={project.name} {...project} />) )}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  ).isRequired
}

export default ProjectList;
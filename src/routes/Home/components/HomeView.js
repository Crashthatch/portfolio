import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import ProjectListContainer from '../containers/ProjectListContainer'
import './HomeView.scss'

export const HomeView = (props) => {
  return (
    <div>
      <h4>Welcome!</h4>

      <ProjectListContainer />
    </div>
  )
}

export default HomeView

import React from 'react'
import ProjectList from '../components/ProjectList'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {projects: state.projects}
}

export default connect(mapStateToProps)(ProjectList);

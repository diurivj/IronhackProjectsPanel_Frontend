import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../../redux/actions/AdminActions/AdminProjectActions';
import toastr from 'toastr';
import UploadProject from "./UploadProject";

class Project1Container extends Component{

  state = {
    project: {}
  };

  handleChange = (e) => {
    const {project} = this.state;
    const field = e.target.name;
    project[field] = e.target.value;
    this.setState({...project});
  };

  handleSubmit = () => {
    const student = JSON.parse(localStorage.getItem(('user')));
    const {project} = this.state;
    project.student = JSON.parse(localStorage.getItem('user'))._id;
    project['cohort'] = student.cohort;
    project['number_project'] = 1;
    this.props.actions.createProject(project);
    toastr.success('Project 1 Saved');
    this.props.history.push('/student');
  };

  render(){
    const project = this.props.projects[0] ? this.props.projects[0] : {};
    console.log(JSON.parse(localStorage.getItem(('user'))));
    return(
      <UploadProject handleChange={this.handleChange} handleSubmit={this.handleSubmit} project={project} />
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(projectActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Project1Container);
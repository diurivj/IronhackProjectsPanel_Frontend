import React, {Component} from 'react';
import {StudentForm} from "./NewStudentsForm";
import {Card, Spin} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AdminStudentActions from '../../../../redux/actions/AdminActions/AdminStudentActions';
import * as AdminCohortActions from '../../../../redux/actions/AdminActions/AdminCohortActions';
import toastr from 'toastr';

class NewStudentsContainer extends Component{

  state = {
    user: {}
  };

  handleChange = (e) => {
    const {user} = this.state;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({...user});
  };

  handleCohort = (value, key) => {
    const {user} = this.state;
    user.cohort = key.key;
    this.setState({...user});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {user} = this.state;
    console.log(user);
    //here i got all the information of the new student, ready for dispatch the action
    this.props.actions.createStudent(user);
    toastr.success('New student successfully created');
  };

  render(){
    const {cohorts, fetched} = this.props;
    if (!fetched) return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}><Spin/></div>;
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Card style={{width: '80%'}} hoverable={true} title='Create New Student'>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <StudentForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleCohort={this.handleCohort} cohorts={cohorts}/>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  students: state.students,
  cohorts: state.cohorts,
  fetched: state.cohorts !== undefined && state.students !== undefined
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...AdminStudentActions, ...AdminCohortActions}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentsContainer);
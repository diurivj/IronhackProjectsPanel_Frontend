import React, { Component } from 'react';
import {Card} from "antd";
import {NewUserForm} from "./NewUserForm";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentActions from '../../../redux/actions/AdminActions/AdminStudentActions';

class NewUsersContainer extends Component{
  render(){
    const {students} = this.props;
    //console.log(students);
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Card style={{width: '80%'}} hoverable={true} title='Create New User'>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <NewUserForm students={students}/>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  students: state.students
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(studentActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUsersContainer);
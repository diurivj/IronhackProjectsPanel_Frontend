import React, { Component } from 'react';
import {Card} from "antd";
import {NewUserForm} from "./NewUserForm";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AdminUserActions from '../../../redux/actions/AdminActions/AdminUsersActions';
import toastr from 'toastr';

class NewUsersContainer extends Component{

  state = {
    user: {
      username: '',
      email: '',
      password: 'putita',
      role: 'admin'
    },
    values: ''
  };

  handleNewUser = e => {
    const {user} = this.state;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({...user});
  };

  handleSubmit = e => {
    e.preventDefault();
    const {user} = this.state;
    this.props.actions.createUser(user);
    toastr.success('New Admin Created :)');
    user.username = '';
    user.email = '';
    this.setState({...user});
  };

  render(){
    const {user} = this.state;
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Card style={{width: '80%'}} hoverable={true} title='Create New User'>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <NewUserForm values={user} handleNewUser={this.handleNewUser} handleSubmit={this.handleSubmit}/>
          </div>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AdminUserActions, dispatch),
});

export default connect(null, mapDispatchToProps)(NewUsersContainer);
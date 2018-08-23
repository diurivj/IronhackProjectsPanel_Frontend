import React, {Component} from 'react';
import { Card, Icon } from 'antd';
import { EditProfile } from "./EditProfile";
import toastr from 'toastr';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AdminUsersActions from "../../../redux/actions/AdminActions/AdminUsersActions";
const { Meta } =Card;

class ProfileContainer extends Component{

  componentWillMount(){
    this.setState({user:JSON.parse(localStorage.getItem('user'))})
  }

  state = {
    user: {},
    profile: {},
    visible:false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {profile, user} = this.state;
    this.props.actions.updateUserProfile(profile, user._id);
    toastr.success('Profile edited');
    this.setState({visible:false})
  };

  handleCancel = () => {
    this.setState({visible:false})
  };

  handleEdit = () => {
    this.setState({visible:true})
  };

  handleInfo = (e) => {
    const {profile} = this.state;
    const field = e.target.name;
    profile[field] = e.target.value;
    this.setState({profile});
  };

  handleFile = (info) => {
    const {profile} = this.state;
    profile.photoURL = info.file.originFileObj;
    this.setState({profile});
  };

  render(){
    const {user, visible} = this.state;
    return(
      <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>

        <Card hoverable={true} style={{ width: '60%', top: '-15%' }}>
          <Meta title="Welcome to the Projects Panel"/>
        </Card>

        <Card style={{ width: 300 }}
          cover={<img alt="profile_picture" src={user.photoURL} />}
          actions={[<Icon type="edit" onClick={this.handleEdit}/>]}
        >
          <Meta title={user.username} description={user.email}/>
        </Card>

        <EditProfile
          handleFile={this.handleFile}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
          handleInfo={this.handleInfo}
          visible={visible}
          user={user}
        />

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AdminUsersActions, dispatch),
});

export default connect(null, mapDispatchToProps)(ProfileContainer);
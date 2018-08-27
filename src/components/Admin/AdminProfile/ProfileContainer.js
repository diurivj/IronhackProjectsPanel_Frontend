import React, {Component} from 'react';
import { Card, Icon } from 'antd';
import { EditProfile } from "./EditProfile";
import toastr from 'toastr';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AdminUsersActions from "../../../redux/actions/AdminActions/AdminUsersActions";
const { Meta } =Card;

class ProfileContainer extends Component{

  state = {
    profile: {},
    visible:false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {profile} = this.state;
    const {user} = this.props;
    this.props.actions.updateUserProfile(profile, user._id);
    toastr.success('Profile edited');
    this.setState({visible:false});
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
    const {visible} = this.state;
    const {user, fetched} = this.props;
    console.log(this.props);
    if(!fetched) return <p>loading...</p>;
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

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  fetched: state.user !== undefined
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AdminUsersActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
import React, {Component} from 'react';
import {Card, Icon, Input, Form, Button} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AdminUserActions from '../../redux/actions/AdminActions/AdminUsersActions'
import toastr from 'toastr';

class UpdatePassword extends Component{

  componentWillMount() {
    this.setState({user: JSON.parse(localStorage.getItem('user'))})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {user} = this.state;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const info = {
          token: user.tokenToActive,
          password: values.password
        };
        this.props.actions.updatePassword(info);
        toastr.success('Password updated');
        this.props.history.push('/student');
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };


  render(){

    const { getFieldDecorator } = this.props.form;
    const {user} = this.state;
    const greeting = 'Welcome ' + user.username;
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh'}}>
        <Card hoverable={true} title={greeting} style={{ width: '300px' }}>
          <p>Update your password</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type='password' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="New Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input type='password' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm Password" onBlur={this.handleConfirmBlur}/>
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">Update Password</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AdminUserActions, dispatch),
});

const wrappedForm = Form.create()(UpdatePassword);
export default connect(null, mapDispatchToProps)(wrappedForm);
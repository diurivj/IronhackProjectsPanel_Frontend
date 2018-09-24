import React, { Component } from 'react';
import {Form, Button, Card, Icon, Input} from "antd";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as AdminUserActions from "../../redux/actions/AdminActions/AdminUsersActions";
import toastr from "toastr";

class ResetPassword extends Component{

  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const info = {
          token: this.props.match.params.token,
          password: values.password
        };
        this.props.actions.updatePassword(info);
        toastr.success('Password updated');
        this.props.history.push('/login');
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
    console.log(this.props.match.params.token);
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh'}}>
        <Card hoverable={true} title='Reset your password' style={{ width: '300px' }}>
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

const wrappedForm = Form.create()(ResetPassword);
export default connect(null, mapDispatchToProps)(wrappedForm);

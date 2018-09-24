import React, { Component } from 'react';
import {Form, Card, Icon, Input, Button} from "antd";
import {checkForRecoverPassword} from '../../services/authServices';
import toastr from 'toastr';

class RecoverPassword extends Component{

  state = {
    exists: false,
    error: false
  };

  checkUser = (e) => {
    e.preventDefault();
    checkForRecoverPassword({email: e.target.email.value})
      .then(user => {
        if(user.error) {
          return toastr.error('User not found, check your email');
        }
        toastr.success('Check your email and reset your password');
        return this.props.history.push('/login');
      })
      .catch(e => console.log(e))
  };

  render(){
    return(
      <div style={{backgroundColor: '#2D354C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100vh'}}>
        <h1 style={{marginBottom: '70px', color: 'white'}}>Recover your password</h1>
        <Card hoverable={true} title='Input your email' style={{ width: '300px' }}>
          <Form onSubmit={this.checkUser}>
            <Form.Item>
              <Input type='email' name='email' prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">Recover password</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default RecoverPassword;
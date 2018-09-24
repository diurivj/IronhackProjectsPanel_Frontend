import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/ironhack.png'
import './LoginContainer.css';
const FormItem = Form.Item;

export const LoginForm = ({onSubmit}) => {
  return(
    <div>
      <Card>
        <div style={{maxWidth: '300px', paddingBottom: '20px'}}>
          <img alt="logo-ironhack_logo" src={logo} width="50%" />
        </div>
        <Form onSubmit={onSubmit} className="login-form" style={{ maxWidth: '300px', height: 'auto'}}>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo Electrónico" name="email" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" name="password" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%', marginTop: '20px'}}>Login</Button>
          </FormItem>
        </Form>
        <p>Forgot your password?</p>
        <Link to='/password_recovery'>
          <Button>Recover it</Button>
        </Link>
      </Card>
    </div>
  )
};
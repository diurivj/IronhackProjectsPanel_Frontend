import React from 'react';
import {Button, Form, Input, Icon} from 'antd';

export const NewUserForm = ({handleNewUser, handleSubmit, values}) => {
  return(
    <Form style={{width: '300px'}} onSubmit={handleSubmit}>
      <Form.Item>
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} value={values.username} placeholder="Username" name='username' type="text" onChange={handleNewUser} />
      </Form.Item>
      <Form.Item>
        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} value={values.email} placeholder="Email" name='email' type="email" onChange={handleNewUser}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Create</Button>
      </Form.Item>
    </Form>
  )
};
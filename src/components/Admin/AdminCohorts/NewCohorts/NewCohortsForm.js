import React from 'react';
import {Form, DatePicker, Input, Button} from "antd";

export const NewCohortsForm = ({handleSubmit, onChangeDate, handleChange}) => {
  return(
    <Form onSubmit={handleSubmit} style={{width: '300px'}}>
      <Form.Item>
        <Input placeholder="Name of the cohort" name='name' onChange={handleChange} style={{width:'70%'}} />
      </Form.Item>
      <p style={{color:'lightgray'}}>Example: Web Dev FT Junio 2018</p>
      <Form.Item>
        <DatePicker onChange={onChangeDate} placeholder="Start of the cohort" style={{width:'70%'}}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Create</Button>
      </Form.Item>
    </Form>
  )
};
import React from 'react';
import {Form, DatePicker, Input, InputNumber, Button} from "antd";

export const NewCohortsForm = ({handleSubmit, onChangeDate, handleChange, onChangeGeneration}) => {
  return(
    <Form onSubmit={handleSubmit} style={{width: '300px'}}>
      <Form.Item>
        <Input placeholder="Name of the cohort" name='name' onChange={handleChange} style={{width:'70%'}} />
      </Form.Item>
      <Form.Item>
        <DatePicker onChange={onChangeDate} placeholder="Start of the cohort" style={{width:'70%'}}/>
      </Form.Item>
      <Form.Item>
        <InputNumber min={1} max={100} onChange={onChangeGeneration} style={{width:'70%'}} placeholder="Generation"/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Create</Button>
      </Form.Item>
    </Form>
  )
};
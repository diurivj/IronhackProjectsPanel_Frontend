import React from 'react';
import {Select, Button, Form, Input, Icon} from 'antd';
const Option = Select.Option;

export const StudentForm = ({handleSubmit, handleChange, handleCohort, cohorts}) => {
  console.log(cohorts);
  return(
      <Form onSubmit={handleSubmit} style={{width: '300px'}}>
        <Form.Item>
          <Select
            style={{width: '100%'}}
            showSearch
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            optionFilterProp="children"
            placeholder='Select cohort'
            onChange={handleCohort}
          >
            <Option value='1'>Cohort 1</Option>
            <Option value='2'>Cohort 2</Option>
            <Option value='3'>Cohort 3</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" name='name' onChange={handleChange}/>
        </Form.Item>
        <Form.Item>
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" name='lastname' onChange={handleChange}/>
        </Form.Item>
        <Form.Item>
          <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" type='email' name='email' onChange={handleChange}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">Create</Button>
        </Form.Item>
      </Form>
  )
};
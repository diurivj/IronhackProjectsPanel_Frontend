import React from 'react';
import {Select, Button, Form, Input, Icon} from 'antd';
const Option = Select.Option;

export const NewUserForm = ({students}) => {
  console.log(students);

  return(
    <Form style={{width: '300px'}}>
      <Form.Item>
        <Select
          style={{width: '100%'}}
          showSearch
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          optionFilterProp="children"
          placeholder='Select student'
        >
          {students.map(student => {
            const name = student.name +  ' ' + student.lastname;
            return (
              <Option key={student._id} value={name}>{name}</Option>
            )
          })}
        </Select>
      </Form.Item>

      <Form.Item>
        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name='email' type="email" />
      </Form.Item>

      <Form.Item>
        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" name='password' type="password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Create</Button>
      </Form.Item>
    </Form>
  )
};
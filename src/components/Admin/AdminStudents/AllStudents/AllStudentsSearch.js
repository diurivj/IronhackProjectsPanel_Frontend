import React from 'react';
import {Select} from 'antd';
const Option = Select.Option;

export const AllStudentsSearch = () => {
  return(
    <Select
      style={{width: '250px'}}
      showSearch
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      optionFilterProp="children"
      placeholder='Search student'
    >
      <Option value='1'>Bliss</Option>
      <Option value='2'>Oswaldo</Option>
      <Option value='3'>David</Option>
    </Select>
  )
};



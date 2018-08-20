import React from 'react';
import {Select} from 'antd';
const Option = Select.Option;

export const AllStudentsSearch = ({students}) => {
  return(
    <Select
      style={{width: '250px'}}
      showSearch
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      optionFilterProp="children"
      placeholder='Search student'
    >
      {students.map(student => {
        let fullname = student.name + ' ' + student.lastname;
        return (
          <Option key={student._id} value={student._id}>{fullname}</Option>
        )
      })}
    </Select>
  )
};



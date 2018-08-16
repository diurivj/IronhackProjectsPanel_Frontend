import React, {Component} from 'react';
import {StudentForm} from "./NewStudentsForm";
import {Card} from 'antd';

class NewStudentsContainer extends Component{
  render(){
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Card style={{width: '80%'}} hoverable={true} title='Create New Student'>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <StudentForm/>
          </div>
        </Card>
      </div>
    )
  }
}

export default NewStudentsContainer;
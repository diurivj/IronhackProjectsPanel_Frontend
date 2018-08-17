import React, {Component} from 'react';
import {AllStudentsSearch} from "./AllStudentsSearch";
import {Card, Button} from 'antd';
import AllStudentsList from "./AllStudentsList";

class AllStudentsContainer extends Component{
  render(){
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Card title='All Students'  hoverable={true} style={{width: '80%'}}>
          <div style={{ display: 'flex', flexWrap:'wrap', alignItems: 'center', justifyContent: 'space-between', flexGrow:'1' }}>
            <AllStudentsSearch/>
            <Button>Puchame</Button> {/* Aquí tendrían que ir los demás filtros */}
            <AllStudentsList/>
          </div>
        </Card>
      </div>
    )
  }
}

export default AllStudentsContainer;
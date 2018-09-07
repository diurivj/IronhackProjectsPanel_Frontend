import React, {Component} from 'react';
import MenuPanel from "./MenuPanel";
import StudentRoutes from "./StudentRoutes";

class StudentContainerPanel extends Component{

  componentWillMount() {
    if(!localStorage.getItem('user')) return this.props.history.push('/');
  }

  render(){
    return(
      <div style={{display:'flex'}}>
        <MenuPanel {...this.props}/>
        <StudentRoutes/>
      </div>
    )
  }
}

export default StudentContainerPanel;
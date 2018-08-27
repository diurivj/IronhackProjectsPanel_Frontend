import React, {Component} from 'react';
import MenuPanel from "./MenuPanel";
import AdminRoutes from "./AdminRoutes";

class ContainerPanel extends Component{

  componentWillMount() {
    if(!localStorage.getItem('user')) return this.props.history.push('/');
  }

  render(){
    return(
      <div style={{ display: 'flex'}}>
        <MenuPanel {...this.props}/>
        <AdminRoutes />
      </div>
    )
  }
}

export default ContainerPanel;
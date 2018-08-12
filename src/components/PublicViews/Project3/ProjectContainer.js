import React, {Component} from 'react';
import {TopPage} from "./TopPage";

class ProjectContainer extends Component{

  handleClick = () => {
    this.props.history.push('/project3/list');
  };

  render(){
    return(
      <div style={{backgroundColor: "#181B23", display: "flex"}}>
        <TopPage handleClick={this.handleClick} />
      </div>
    )
  }
}

export default ProjectContainer;
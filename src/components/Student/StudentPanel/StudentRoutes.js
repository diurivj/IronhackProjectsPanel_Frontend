import {Component} from "react";
import {Route, Switch} from "react-router-dom";
import ProfileContainer from "../../Admin/AdminProfile/ProfileContainer";
import React from "react";
import Project1Container from "../Project1/Project1Container";

class StudentRoutes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/student' component={ProfileContainer} />
        <Route path='/student/project1' component={Project1Container} />
      </Switch>
    )
  }
}

export default StudentRoutes;
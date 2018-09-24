import {Component} from "react";
import {Route, Switch} from "react-router-dom";
import ProfileContainer from "../../Admin/AdminProfile/ProfileContainer";
import React from "react";
import Project1Container from "../ProjectsHandler/Project1Container";
import Project2Container from "../ProjectsHandler/Project2Container";

class StudentRoutes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/student' component={ProfileContainer} />
        <Route path='/student/project1' component={Project1Container} />
        <Route path='/student/project2' component={Project2Container} />
      </Switch>
    )
  }
}

export default StudentRoutes;
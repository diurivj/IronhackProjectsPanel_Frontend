import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileContainer from "../AdminProfile/ProfileContainer";
import NewStudentsContainer from "../AdminStudents/NewStudents/NewStudentsContainer";
import AllStudentsContainer from "../AdminStudents/AllStudents/AllStudentsContainer";

class AdminRoutes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/admin' component={ProfileContainer} />
        <Route path='/admin/students/new' component={NewStudentsContainer} />
        <Route path='/admin/students/all' component={AllStudentsContainer} />
      </Switch>
    )
  }
}

export default AdminRoutes;
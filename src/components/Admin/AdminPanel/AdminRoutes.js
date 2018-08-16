import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import PublishContainer from "../AdminPublish/PublishContainer";
import StudentsContainer from "../AdminStudents/StudentsContainer";

class AdminRoutes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/admin' component={PublishContainer} />
        <Route path='/admin/students/new' component={StudentsContainer} />
      </Switch>
    )
  }
}

export default AdminRoutes;
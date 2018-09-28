import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from "./components/Login/LoginContainer";
import ProjectContainer from "./components/PublicViews/Project3/ProjectContainer";
import ListPage from "./components/PublicViews/Project3/ListPage";
import ContainerPanel from "./components/Admin/AdminPanel/ContainerPanel";
import HomeContainer from "./components/Home/HomeContainer";
import UpdatePassword from "./components/Login/UpdatePassword";
import StudentContainerPanel from "./components/Student/StudentPanel/StudentContainerPanel";
import Project1 from "./components/PublicViews/Project1";
import RecoverPassword from "./components/Login/RecoverPassword";
import ResetPassword from "./components/Login/ResetPassword";
import DraggableContainer from "./components/Draggable/DraggableContainer";

export const Routes = () => (
  <Switch>
    <Route path='/admin' component={ContainerPanel} />
    <Route path='/student' component={StudentContainerPanel} />
    <Route exact path='/login' component={LoginContainer} />
    <Route exact path='/project3/list' component={ListPage} />
    <Route exact path='/project3' component={ProjectContainer} />
    <Route exact path='/' component={HomeContainer} />
    <Route exact path='/update_password' component={UpdatePassword} />
    <Route path='/cohort/:id/project1' component={Project1} />
    <Route exact path='/password_recovery' component={RecoverPassword} />
    <Route path='/reset_password/:token' component={ResetPassword} />
    <Route path='/project/:project/:cohort' component={DraggableContainer}/>
  </Switch>
);
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from "./components/Login/LoginContainer";
import ProjectContainer from "./components/PublicViews/Project3/ProjectContainer";
import ListPage from "./components/PublicViews/Project3/ListPage";
import ContainerPanel from "./components/Admin/AdminPanel/ContainerPanel";
import HomeContainer from "./components/Home/HomeContainer";
import UpdatePassword from "./components/Login/UpdatePassword";

export const Routes = () => (
  <Switch>
    <Route path='/admin' component={ContainerPanel} />
    <Route exact path='/login' component={LoginContainer} />
    <Route exact path='/project3/list' component={ListPage} />
    <Route exact path='/project3' component={ProjectContainer} />
    <Route exact path='/' component={HomeContainer} />
    <Route exact path='/update_password' component={UpdatePassword} />
  </Switch>
);
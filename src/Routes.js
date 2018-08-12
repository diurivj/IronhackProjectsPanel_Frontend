import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LoginContainer from "./components/Login/LoginContainer";
import ProjectContainer from "./components/PublicViews/Project3/ProjectContainer";
import ListPage from "./components/PublicViews/Project3/ListPage";

export const Routes = () => (
  <Switch>
    <Route exact path='/login' component={LoginContainer} />
    <Route exact path='/project3/list' component={ListPage} />
    <Route exact path='/project3' component={ProjectContainer} />
    <Route exact path='/' render={()=>(<Redirect to={"/project3"}/>)}/>
  </Switch>
);
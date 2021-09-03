import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';

import RegisterView from './Views/RegisterView';
import LogInView from './Views/LogInView';

import TeamView from './Views/TeamView';
import UserView from './Views/UserView';

import CreateProjectView from './Views/CreateProjectView';
import HomeView from './Views/HomeView';
import ProjectView from './Views/ProjectView';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <div className="view">
          <Route exact path="/" component={HomeView} />
          <Route exact path="/projects/" component={HomeView} />
          <Route exact path="/projects/:project_id" component={ProjectView} />
          <Route exact path="/create_project/" component={CreateProjectView} />

          <Route exact path="/users/" component={TeamView} />
          <Route exact path="/users/:user_id" component={UserView} />

          <Route exact path="/register/" component={RegisterView} />
          <Route exact path="/login/" component={LogInView} />
        </div>
      </BrowserRouter>
    </div>
  );
}

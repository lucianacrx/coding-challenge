import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import UserListComponent from './components/UserList/UserListComponent.js';
import UserAddComponent from './components/UserAdd/UserAddComponent.js';

function App() {

  return (
      <Switch>
        <Route path="/" exact component={UserListComponent} />
        <Route path="/add" component={UserAddComponent} />
      </Switch>
  );

}

export default App;

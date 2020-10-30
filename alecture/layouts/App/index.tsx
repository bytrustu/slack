import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// @ts-ignore
const LogIn = loadable(() => import ('@pages/LogIn'));
// @ts-ignore
const SignUp = loadable(() => import ('@pages/SignUp'));


const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  )
};

export default App;

import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import NavContainer from './nav/nav_container'
import {
  Route,
  Link,
  HashRouter,
  Switch
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
    </Switch>
   </div>
);

export default App;

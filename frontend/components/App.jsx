import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import NavContainer from './nav/nav_container'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignUpFormContainer}/>
   </div>
);

export default App;

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import CreateUserForm from './user_create_form';

const mapStateToProps = ({ session, errors }) => {
  return {
    errors: errors.session,
    navLink: <Link to="/login">Log in</Link>,
    currentUser: Boolean(session.id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserForm)

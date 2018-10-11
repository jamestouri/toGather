import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { createGroup } from '../../actions/group_actions';
import CreateGroup from './group_form';

const mapStateToProps = ({ session, entities: {users}}) => {
  return {
    currentUser: users[session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
      createGroup: group => dispatch(createGroup(group)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);

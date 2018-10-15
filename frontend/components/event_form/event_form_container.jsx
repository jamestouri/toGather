import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { createEvent } from '../../actions/event_actions';

import EventForm from './event_form';

const mapStateToProps = ({session, entities: {users}}) => {
  return {
    user: users[session.id],
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createEvent: event => dispatch(createEvent(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

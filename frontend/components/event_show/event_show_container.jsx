import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ShowEvent from './event_show';
import { fetchEvent } from '../../actions/event_actions';


const mapStateToProps = (state, ownProps) => {
  const event = state.entities.events[ownProps.match.params.eventId];
  if (!event) {
    return {event}
  }
  const group = state.entities.groups[event.group_id];
  const user = state.entities.users[event.user_id];
  return {event, group, user}
}


const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: id => dispatch(fetchEvent(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);

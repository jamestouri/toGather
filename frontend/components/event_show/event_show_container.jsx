import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ShowEvent from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { fetchRsvp } from '../../actions/rsvp_actions';
import {rsvp} from '../../actions/rsvp_actions';
import { hasJoinGroup } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const event = state.entities.events[ownProps.match.params.eventId];
  if (!event) {
    return {event}
  }
  const group = state.entities.groups[event.group_id];
  const user = state.entities.users[event.user_id];
  const session_user = state.session.id;
  const rsvpEvent = hasJoinGroup(group.id, session_user, state.entities.rsvp)

  return {event, group, user, session_user, rsvpEvent}
}


const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: id => dispatch(fetchEvent(id)),
    fetchRsvp: id => dispatch(fetchRsvp(id)),
    rsvp: data => dispatch(rsvp(data)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);

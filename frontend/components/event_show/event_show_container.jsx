import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ShowEvent from './event_show';
import { fetchEvent } from '../../actions/event_actions';


const mapStateToProps = (state, ownProps) => {
  const event = state.entities.events[ownProps.match.params.eventId];

  return {event}
}


const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: id => dispatch(fetchEvent(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);

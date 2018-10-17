import React from 'react';
import {connect} from 'react-redux';
import FindEvent from './event_find';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
  return {
    events: Object.values(state.entities.events)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindEvent);

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import EventSnippet from './event_snippet';
import { fetchEvent } from '../../actions/event_actions';
import {selectEventsForGroup} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const group = state.entities.groups[ownProps.group.id];
  if(!group.events) {
    return {};
  }
  const events = selectEventsForGroup(state.entities, group);
  return {
    events
  }
}



export default connect(mapStateToProps, null)(EventSnippet);

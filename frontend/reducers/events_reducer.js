import {RECEIVE_EVENT, RECEIVE_EVENTS} from '../actions/event_actions';
import {RECEIVE_GROUP} from '../actions/group_actions';

import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return merge(newState, action.events);
    case RECEIVE_EVENT:
      return merge(newState, {[action.event.id] : action.event});
    case RECEIVE_GROUP:
      return merge(newState, action.events);
    default:
      return state;
  }
}

export default eventsReducer;

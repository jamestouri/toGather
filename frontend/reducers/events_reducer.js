import {RECEIVE_EVENT, RECEIVE_EVENTS} from '../actions/event_actions';
import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      return merge(newState, {[action.event.id] : action.event});
    default:
      return state;
  }
}

export default eventsReducer;

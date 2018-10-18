import {RECEIVE_RSVP,
  RECEIVE_RSVPS,
  REMOVE_RSVP} from '../actions/rsvp_actions';

import merge from 'lodash/merge';

const rsvpReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RSVPS:
      return action.rsvps;
    case RECEIVE_RSVP:
      return merge(newState, action.data)
    default:
        return state;
  }
}

export default rsvpReducer;

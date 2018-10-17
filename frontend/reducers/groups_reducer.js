import {RECEIVE_GROUPS,
        RECEIVE_GROUP
      } from '../actions/group_actions';
import {RECEIVE_EVENT} from '../actions/event_actions';


import merge from 'lodash/merge';
const groupsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      return merge(newState, {[action.group.id] : action.group});
    case RECEIVE_EVENT:
      return merge(newState, {[action.group.id] : action.group});
    default:
      return state;
  }
}

export default groupsReducer;

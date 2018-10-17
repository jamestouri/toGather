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
      if(action.group.events) {
        if(action.group.events.includes(action.event.id)) {
          return merge(newState, {[action.group.id] : action.group});
        } else {
          newState[action.group.id].events.push(action.event.id);
        }
      } else {
        newState[action.group.id].events = [action.event.id];
      }
      return newState

      return merge(newState, {[action.group.id] : action.group});
    default:
      return state;
  }
}

export default groupsReducer;

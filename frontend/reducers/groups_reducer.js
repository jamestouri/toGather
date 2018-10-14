import {RECEIVE_GROUPS,
        RECEIVE_GROUP
      } from '../actions/group_actions';
import {RECEIVE_JOIN_GROUP} from '../actions/join_group_actions';
import merge from 'lodash/merge';

const groupsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      return merge(newState, {[action.group.id] : action.group});      
    default:
      return state;
  }
}

export default groupsReducer;

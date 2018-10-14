import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_GROUP} from '../actions/group_actions';
import {RECEIVE_JOIN_GROUP} from '../actions/join_group_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_GROUP:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_JOIN_GROUP:
      newState[action.user.id].joinedGroups.push(action.group.id);
      return newState;
    default:
      return state;
  }
}

export default usersReducer;

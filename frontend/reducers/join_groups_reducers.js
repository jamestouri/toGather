import {RECEIVE_JOIN_GROUP, RECEIVE_JOIN_GROUPS} from '../actions/join_group_actions';


import merge from 'lodash/merge';

const joinGroupsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_JOIN_GROUPS:
      return action.join_groups;
    case RECEIVE_JOIN_GROUP:
      return merge(newState, action.data);
    default:
      return state
  }
}

export default joinGroupsReducer;

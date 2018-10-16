import {RECEIVE_JOIN_GROUP} from '../actions/join_group_actions';


import merge from 'lodash/merge';

const joinGroupsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_JOIN_GROUP:
      return merge(newState, {[action.joinGroup.id]: action.joinGroup});
    default:
      return state
  }
}

export default joinGroupsReducer;

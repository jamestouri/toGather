import * as JoinGroupAPIUtil from '../util/join_group';

export const RECEIVE_JOIN_GROUPS = 'RECEIVE_JOIN_GROUPS';
export const RECEIVE_JOIN_GROUP = 'RECEIVE_JOIN_GROUP';
export const REMOVE_JOIN_GROUP = 'REMOVE_JOIN_GROUP';

const receiveJoinGroups = (join_groups) => {
  return {
    type:RECEIVE_JOIN_GROUPS,
    join_groups,
  }
}

const receiveJoinGroup = (data) => {
  return {
    type: RECEIVE_JOIN_GROUP,
    data
  }
}

const removeJoinGroup = id => {
  return {
    type: REMOVE_JOIN_GROUP,
    id,
  }
}

export const fetchJoinGroup = (id) => dispatch => {
  return JoinGroupAPIUtil.fetchJoinGroup(id)
    .then(join_groups => dispatch(receiveJoinGroup(join_groups)));
}

export const fetchJoinGroups = () => dispatch => {
  return JoinGroupAPIUtil.fetchJoinGroups()
    .then(join_groups => dispatch(receiveJoinGroups(join_groups)));
}

export const joinGroup = data => dispatch => {
  return JoinGroupAPIUtil.joinGroup(data)
    .then(joinGroup => dispatch(receiveJoinGroup(joinGroup)));
}


export const leaveGroup = () => dispatch => {
  return JoinGroupAPIUtil.leaveGroup()
    .then(id => dispatch(receiveJoinGroup(id)));
}

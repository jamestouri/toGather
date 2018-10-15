import * as JoinGroupAPIUtil from '../util/join_group';

export const RECEIVE_JOIN_GROUP = 'RECEIVE_JOIN_GROUP';
export const REMOVE_JOIN_GROUP = 'REMOVE_JOIN_GROUP';


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


export const joinGroup = data => dispatch => {
  return JoinGroupAPIUtil.joinGroup(data)
    .then(join_group => dispatch(receiveJoinGroup(join_group)));
}


export const leaveGroup = () => dispatch => {
  return JoinGroupAPIUtil.leaveGroup()
    .then(id => dispatch(receiveJoinGroup(id)));
}

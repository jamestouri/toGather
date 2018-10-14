import * as JoinGroupAPIUtil from '../util/join_group';

export const RECEIVE_JOIN_GROUP = 'RECEIVE_JOIN_GROUP';
export const REMOVE_JOIN_GROUP = 'REMOVE_JOIN_GROUP';


const receiveJoinGroup = join_group => {
  return {
    type: RECEIVE_JOIN_GROUP,
    join_group,
  }
}

const removeJoinGroup = id => {
  return {
    type: REMOVE_JOIN_GROUP,
    id,
  }
}


export const createJoinGroup = data => dispatch => {
  return JoinGroupAPIUtil.createJoinGroup(data)
    .then(join_group => dispatch(receiveJoinGroup(join_group)));
}


export const deleteJoinGroup = () => dispatch => {
  return JoinGroupAPIUtil.deleteJoinGroup()
    .then(id => dispatch(receiveJoinGroup(id)));
}

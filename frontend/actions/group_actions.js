import * as GroupAPIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';

const receiveGroups = groups => {
  return {
    type: RECEIVE_GROUPS,
    groups
  }
}

const receiveGroup = ({group, user, event}) => {
  return {
    type: RECEIVE_GROUP,
    group,
    user,
    event
  }
}

export const fetchGroups = () => dispatch => {
  return GroupAPIUtil.fetchGroups()
    .then(groups => dispatch(receiveGroups(groups)));
};

export const fetchGroup = id => dispatch => {
  return GroupAPIUtil.fetchGroup(id)
    .then(group => dispatch(receiveGroup(group)));
}

export const createGroup = group => dispatch => {
  return GroupAPIUtil.createGroup(group)
    .then(group => dispatch(receiveGroup(group)));
}

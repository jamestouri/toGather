import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ShowGroup from './show_group';
import { fetchGroup } from '../../actions/group_actions';
import { hasJoinGroup } from '../../reducers/selectors';
import { fetchJoinGroups, fetchJoinGroup } from '../../actions/join_group_actions';


const mapStateToProps = (state, ownProps) => {
  const group = state.entities.groups[ownProps.match.params.groupId];
  if(!group) {
    return{group};
  }
  const user = state.entities.users[group.user_id];
  const session_user = state.session.id;
  const joinedGroup = hasJoinGroup(group.id, session_user, state.entities.joinGroups)

  return {group, user, session_user, joinedGroup};


};

const mapDispatchToProps = dispatch => {
  return {
    fetchGroup: id => dispatch(fetchGroup(id)),
    fetchJoinGroup: id => dispatch(fetchJoinGroup(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowGroup);

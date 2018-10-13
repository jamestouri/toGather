import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ShowGroup from './show_group';
import { fetchGroup } from '../../actions/group_actions';
import { selectGroup } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const group = state.entities.groups[ownProps.match.params.groupId];

  return {group};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGroup: id => dispatch(fetchGroup(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowGroup);

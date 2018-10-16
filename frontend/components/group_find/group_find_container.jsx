import React from 'react';
import {connect} from 'react-redux';
import FindGroup from './group_find';
import { fetchGroups } from '../../actions/group_actions';


const mapStateToProps = state => {
  return {
    groups: Object.values(state.entities.groups),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGroups: () => dispatch(fetchGroups()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindGroup);

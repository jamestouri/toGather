import React from 'react';
import {connect} from 'react-redux';
import FindGroup from './group_find';
import { fetchGroups } from '../../actions/group_actions';


const mapStateToProps = state => {
    if(state.groups) {
      return Object.values(state.groups);
  } else {
    return state;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGroups: index => dispatch(fetchGroups(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindGroup);

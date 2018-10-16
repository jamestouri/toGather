import React from 'react';
import { joinGroup } from '../../actions/join_group_actions';
import {connect} from 'react-redux';
import merge from 'lodash/merge';


class GroupTabsSelection extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      group_id: this.props.group.id,
      user_id: this.props.session,
    }
    
    this.props.joinGroup(data);
  }
  render() {
    return (
      <div className="group-tabs">
        <ul>
          <li className="about-light-up">About</li>
          <li>Meetups</li>
          <li>Members</li>
          <li>Photos</li>
          <li>Discussions</li>
          <li>More</li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="submit"
            className="group-tabs-button"
            value= "Join this Group"></input>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    joinGroup: data => dispatch(joinGroup(data)),
  }
}

export default connect(null, mapDispatchToProps)(GroupTabsSelection);

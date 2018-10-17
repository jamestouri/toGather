import React from 'react';
import { Link } from 'react-router-dom';
import GroupHomeHeader from './group_header_item';
import GroupTabsSelection from './group_tabs_items';
import AboutGroupSection from './about_group_section';

import { StickyContainer, Sticky } from 'react-sticky';
// Go back and work on this later

class ShowGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId)
    this.props.fetchJoinGroup(this.props.match.params.groupId)
  }



  render() {
    if(!this.props.group) {
      return null
    }
    return (
    <div className="show-group-structure">
      <GroupHomeHeader
            key={this.props.group.id}
            group = {this.props.group}
            user = {this.props.user}
            />

      <GroupTabsSelection
        session={this.props.session_user}
        group={this.props.group}
        joinedGroup = {this.props.joinedGroup}
        />
      <AboutGroupSection
            group={this.props.group}
            user = {this.props.user}/>
    </div>

    )
  }
}

export default ShowGroup;

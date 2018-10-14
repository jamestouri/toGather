import React from 'react';
import { Link } from 'react-router-dom';
import GroupHomeHeader from './group_header_item';

class ShowGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId)
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
            user = {this.props.user} />
    </div>

    )
  }
}

export default ShowGroup;

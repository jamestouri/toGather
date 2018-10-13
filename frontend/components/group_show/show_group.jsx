import React from 'react';
import { Link } from 'react-router-dom';

class ShowGroup extends React.Component {
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId)
  }
  constructor(props) {
    super(props);

  }
  render() {
    if(!this.props.group) {
      return null
    }

    return (
      <div>
        <h1>{this.props.group.title}</h1>
        <h1>{this.props.group.category}</h1>
      </div>

    )
  }
}

export default ShowGroup

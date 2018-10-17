import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class FindEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if(!this.props.events[0]) {
      return null;
    }
    return (
      <h1>Hi</h1>
    )
  }
}

export default withRouter(FindEvent);

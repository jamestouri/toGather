import React from 'react';
import { withRouter } from 'react-router-dom';

class FindGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  numberOf(events = 0, groups = 0) {
    return [events, groups];
  }


  render() {

    return (
      <div>
        <div className="body-header">
          <h2>Find a Meetup</h2>
          <h6>in your groups</h6>
        </div>
      </div>
    )
  }
}

export default withRouter(FindGroup);

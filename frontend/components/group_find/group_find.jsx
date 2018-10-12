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

        </div>
      </div>
    )
  }
}

export default withRouter(FindGroup);

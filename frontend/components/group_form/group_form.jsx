import React from 'react';
import { withRouter } from 'react-router-dom';


class CreateGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="head-picture">
          <h1 >Start a new Group</h1>
          <h4>We'll help you find the right people to make it happen.</h4>
        </div>

      </div>
    )
  }
}

export default withRouter(CreateGroup);

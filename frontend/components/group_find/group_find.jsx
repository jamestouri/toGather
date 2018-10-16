import React from 'react';
import { withRouter } from 'react-router-dom';

class FindGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      distance: 2,
      city: 'San Francisco'
    }

  }

  numberOf(events = 0, groups = 0) {
    return [events, groups];
  }


  render() {
    return (
      <div>
        <div className="body-header">
          <div className="body-header-text">
            <h2>Find a Meetup</h2>
            <h6>in your groups · nearby</h6>
          </div>
        </div>
        <div className="body-index">
          <div className="search-and-select-absolute">
            <form className="searchForm">
              <input className="search-form-group" placeholder="Search Group"/>
              <input className="search-form-button" type="submit" value="✓"/>
            </form>
            <p className="paragraph-section">
              within <button>{this.state.distance} miles</button> of <button>{this.state.location}</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(FindGroup);

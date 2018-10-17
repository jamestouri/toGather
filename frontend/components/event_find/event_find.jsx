import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class FindEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 2,
      location: 'San Francisco, CA'
    }
    this.getDropdown = this.getDropdown.bind(this);

  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  getDropdown() {
    document.getElementById('my-dropdown').classList.toggle('show-dropdown');
    document.getElementById('my-dropdown').classList.remove('dropdown-content');
  }

  updateDistance(field) {
    return(e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});

      let distance = document.getElementById('my-dropdown');
      if (distance.classList.contains('show-dropdown')) {
        distance.classList.remove('show-dropdown')
        distance.classList.toggle('dropdown-content')
      }
    }

  }

  

  render() {
    if(!this.props.events[0]) {
      return null;
    }
    return (
      <div className="event-page">
        <div className="body-header">
          <div className="body-header-text">
            <h2>Find an Event</h2>
            <h6>{this.props.events.length} events</h6>
          </div>
        </div>
        <div className="body-index">
          <div className="search-and-select-absolute">
            <form className="searchForm">
              <input className="search-form-group" placeholder="Search Group"/>
              <input className="search-form-button" type="submit" value="✓"/>
            </form>
            <div className="filtering-with-dropdown">
                <div className="filtering-section">
                  <p className="paragraph-section">
                    within  <button onClick={this.getDropdown} className="distance-filtering">{this.state.distance} miles</button>  of  <button className="location-filtering">{this.state.location}</button>
                </p>
                <div className="right-side-line">
                  <Link className="go-to-events" to={`/find`}>Find Groups</Link>
                </div>
              </div>
              <div id="my-dropdown" className="dropdown-content">
                <ul className="list-of-dropdown">
                  <li><input onClick={this.updateDistance('distance')} type="submit" value="2"/>miles</li>
                  <li><input onClick={this.updateDistance('distance')} type='submit' value="5"/>miles</li>
                  <li><input onClick={this.updateDistance('distance')} type='submit' value="10"/>miles</li>
                  <li><input onClick={this.updateDistance('distance')} type='submit' value="25"/>miles</li>
                  <li><input onClick={this.updateDistance('distance')} type='submit' value="50"/>miles</li>
                  <li><input onClick={this.updateDistance('distance')} type='submit' value="200"/>miles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(FindEvent);

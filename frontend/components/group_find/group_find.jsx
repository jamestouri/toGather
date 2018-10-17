import React from 'react';
import { withRouter } from 'react-router-dom';

class FindGroup extends React.Component {

  componentDidMount() {
    this.props.fetchGroups();
  }

  constructor(props) {
    super(props);
    this.state = {
      distance: 2,
      location: 'San Francisco, CA'
    }
    this.getDropdown = this.getDropdown.bind(this);

  }
  // for the top heading
  numberOf(events = 0, groups = 0) {
    return [events, groups];
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
    if(!this.props.groups[0]) {
      return null;
    }
    return (
      <div>
        <div className="body-header">
          <div className="body-header-text">
            <h2>Find a Group</h2>
            <h6>in your groups · nearby</h6>
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

export default withRouter(FindGroup);

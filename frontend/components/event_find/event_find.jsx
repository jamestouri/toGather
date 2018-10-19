import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import EventItem from './event_item';

class FindEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 2,
      location: 'San Francisco, CA',
      search: ''
    }
    this.today = new Date();
    this.getDropdown = this.getDropdown.bind(this);

  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
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
  // sort the events
  nextEvents() {
    this.props.events.sort(function(a, b) {
      a = new Date(a.date_time);
      b = new Date(b.date_time);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    let nextEvents = [];
    for (let i = 0; i < this.props.events.length; i++) {
      if (new Date(this.props.events[i].date_time) >= this.today){
        nextEvents.push(this.props.events[i]);
      }
    }
    return nextEvents;
  }
  // If date is the same don't return a date text

  // list of events
  eventFindBuildOut(sortedEvents) {
      let events = []
      const monthNames = ["January", "Febuary", "March",
      "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
      ];
      let currentDate = '';
      for (let i = sortedEvents.length - 1; i > 0; i--) {
        const date = new Date(sortedEvents[i].date_time);
        const dateLook = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
        const lowerCase = (sortedEvents[i].title).toLowerCase();
        if(lowerCase.includes((this.state.search).toLowerCase())) {
          if(currentDate !== dateLook) {
            events.push(<li>
              <div className="date-for-event">{dateLook}</div>
                <EventItem
                  key={sortedEvents[i].id}
                  event={sortedEvents[i]}
                  />
            </li>)
            currentDate = dateLook;
          } else {
            events.push(<li>
              <EventItem
                key={sortedEvents[i].id}
                event={sortedEvents[i]}
                />
            </li>)
          }
        }
      }
    return events;
  }

  render() {
    if(!this.props.events[0]) {
      return null;
    }

    const sortedEvents = this.nextEvents()
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
              <input className="search-form-group"
                placeholder="Search Event"
                value={this.state.search}
                onChange={this.update('search')}
                />
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
          <ul className='list-of-all-events'>
            {this.eventFindBuildOut(sortedEvents)}
          </ul>
        </div>
        <div className='gray-background-event-find'></div>
      </div>
    )
  }
}

export default withRouter(FindEvent);

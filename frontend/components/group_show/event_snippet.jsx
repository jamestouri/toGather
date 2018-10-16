import React from 'react';
import { Link } from 'react-router-dom';
import EventSnippetContainer from './event_snippet_container';

class EventSnippet extends React.Component {
  constructor(props) {
    super(props)
    this.today = new Date();
  }

  nextEvent() {
    this.props.events.sort(function(a, b) {
      a = new Date(a.date_time);
      b = new Date(b.date_time);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    let nextEvents = [];
    for (let i = 0; i < this.props.events.length; i++) {
      if (this.props.events[i] - this.today){
        nextEvent.append(this.props.events[i]);
      }
    }
    return nextEvents[0];
  }

  render() {
    if(!this.props.events) {
      return null;
    }
    const nextEvent = nextEvent();
    return (
      <div className="next-event-structure">
        <div className="next-event-mark">
          <h1>Next Event</h1>
          <h4>See all</h4>
        </div>
        <div className="next-event-description">
          <div className="next-event-calendar">
          </div>

          <div className="next-event-card">
            <h4 className="date-for-event-full"></h4>
            <h1></h1>
            <div className="next-event-card-profile">
              <p></p>

            </div>
          </div>

          <div className="next-event-actions">

            //button for rsvp
          </div>
        </div>
      </div>
    )
  }

}

export default EventSnippet;

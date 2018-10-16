import React from 'react';
import { Link } from 'react-router-dom';
import EventSnippetContainer from './event_snippet_container';

class EventSnippet extends React.Component {
  constructor(props) {
    super(props)
    this.today = new Date();
    this.state = {
      events: this.props.events,
    }
  }

  nextEvent() {
    this.state.events.sort(function(a, b) {
      a = new Date(a.date_time);
      b = new Date(b.date_time);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    let nextEvents = [];
    for (let i = 0; i < this.state.events.length; i++) {
      if (new Date(this.state.events[i].date_time) >= this.today){
        nextEvents.push(this.state.events[i]);
      }
    }
    return nextEvents[nextEvents.length - 1];
  }

  render() {
    if(this.state.events.length === 0) {
      return null;

  }
    const nextEvent = this.nextEvent();
    const date = new Date(nextEvent.date_time);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return (
      <div className="next-event-structure">
        <div className="next-event-mark">
          <h1>Next Event</h1>
          <h4>See all</h4>
        </div>
        <div className="next-event-description">
          <div className="next-event-calendar">
            <div className="next-event-calendar-box">
              <h3>{date.getDate()}</h3>
              <h5>{monthNames[date.getMonth()]}</h5>
            </div>
          </div>

          <div className="next-event-card">
            <h4 className="date-for-event-full">
              {monthNames[date.getMonth()]} {date.getDate()}, at {date.getHours() % 12}:{date.getMinutes()}
            </h4>
            <h1>
              {nextEvent.title}
            </h1>
            <div className="next-event-card-profile">
              <p></p>

            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default EventSnippet;

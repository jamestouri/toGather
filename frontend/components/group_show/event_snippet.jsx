import React from 'react';
import { Link } from 'react-router-dom';
import EventSnippetContainer from './event_snippet_container';

class EventSnippet extends React.Component {
  constructor(props) {
    super(props)
    this.today = new Date();
    this.state = {
      events: this.props.events,
      user: this.props.user
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
    if (nextEvent === undefined) {
      return null;
    }
    const date = new Date(nextEvent.date_time);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let min = date.getMinutes();
    if(date.getMinutes() < 10) {
      min = `0${min}`
    }
    let ap = 'AM';
    if(date.getHours() > 11) {
       ap = 'PM';
    }
    return (
      <div className="next-event-structure">
        <Link to={`/events/${nextEvent.id}`} className="entire-snippet-button"></Link>
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
              {monthNames[date.getMonth()]} {date.getDate()}, at {date.getHours() % 12}:{min}{ap}
            </h4>
            <h1>
              {nextEvent.title}
            </h1>
            <div className="next-event-card-profile">
              <img className="host-event-picture" src="https://www.telecomtoday.com.au/wp-content/uploads/2016/06/unknown-testimonial.png"></img>

              <div className="host-event-description">
                <h3>Hosted by </h3>
                <h4> {this.state.user.first_name} {this.state.user.last_name}</h4>
              </div>

            </div>
              <div className="event-description-body">
                {nextEvent.body}
              </div>
          </div>
          <div className="next-event-media">
            <img className="image-photo-snippet" src={nextEvent.image_url}></img>
            <button className="attend-button">Attend</button>
            <h5>{nextEvent.location}</h5>
          </div>
        </div>
      </div>
    )
  }

}

export default EventSnippet;

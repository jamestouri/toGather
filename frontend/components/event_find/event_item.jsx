import React from 'react';
import {Link} from 'react-router-dom';
const EventItem = ({event}) => {
  const date = new Date(event.date_time);
  const hour = date.getHours();

  const timeOfDay = hour => {
    if (hour > 12) {
      return 'PM';
    } else {
      return 'AM';
    }
  }
  return (

    <div className="event-find-item-explain">
        <div className="event-item-time">
          <h2>{hour % 12}:{date.getMinutes()} {timeOfDay(hour)}</h2>
        </div>
        <div className="event-find-text">
          <Link to={`/groups/${event.group_id}`}>Back to Group Page</Link>
          <h2>{event.title}</h2>
          <h4>{event.location}</h4>
        </div>
        <Link to={`/events/${event.id}`}className="event-item-click">
      </Link>
    </div>
  )
}

export default EventItem;

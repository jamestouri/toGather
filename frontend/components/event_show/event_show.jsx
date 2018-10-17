import React from 'react';
import {Link} from 'react-router-dom';


class EventShow extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }
  constructor(props) {
    super(props)

  }

  render() {
    if(!this.props.event) {
      return null;
    }
    const date = new Date(this.props.event.date_time);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const monthNamesLong = ["January", "Febuary", "March",
    "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];

    return (
      <div className="show-event-top">
        <div className="next-event-calendar">
          <div className="next-event-calendar-box">
            <h3>{date.getDate()}</h3>
            <h5>{monthNames[date.getMonth()]}</h5>
          </div>
        </div>

        <div className="next-event-card">
          <h4 className="date-for-event-full">
            {monthNamesLong[date.getMonth()]} {date.getDate()}, {date.getHours() % 12}:{date.getMinutes()}
          </h4>
          <h1>
            {this.props.event.title}
          </h1>
          <div className="next-event-card-profile">
            <img className="host-event-picture" src="https://www.telecomtoday.com.au/wp-content/uploads/2016/06/unknown-testimonial.png"></img>
              <Link className="link-button-for-group"to={`api/${this.props.event.group_id}`}>Back to Group Page</Link>

          </div>

        </div>
        <div className='going-or-not'>
          <h2 className="stubborn-h2">Are you going?</h2>
          <button className="attend-button">Going!</button>
            <div className="list-of-shares-for-event">
              <ul>
                <li className="share-word-event">Share:</li>
                <li><img className="facebook-icon" src="http://www.cfdiocese.org/wp-content/uploads/2015/04/facebook-icon-grey.png"></img></li>
                <li><img className="twitter-icon" src="https://www.gardandco.com/wp-content/uploads/2018/03/twitter-small-grey.png"></img></li>
                <li><img className="linkedin-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-TWttqAHyviLdQymvJRSBqWadyfdD_VGa-B5StSpQ5xmT91Z"></img></li>
                <li><img className="share-icon" src="https://icon-icons.com/icons2/1155/PNG/512/1486564727-share_81543.png"></img></li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}


export default EventShow;

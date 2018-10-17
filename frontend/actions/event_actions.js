import * as EventAPIUtil from '../util/event_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

const receiveEvents = events => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}



const receiveEvent = ({event, user, group}) => {
  return {
    type: RECEIVE_EVENT,
    event,
    user,
    group
  }
}



export const fetchEvents = () => dispatch => {
  return EventAPIUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)));
};

export const fetchEvent = id => dispatch => {
  return EventAPIUtil.fetchEvent(id)
    .then(event => dispatch(receiveEvent(event)));
}

export const createEvent = event => dispatch => {
  return EventAPIUtil.createEvent(event)
    .then(event => dispatch(receiveEvent(event)));
}

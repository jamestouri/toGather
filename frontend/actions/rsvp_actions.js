import * as RsvpAPIUtil from '../util/rsvp_util';

export const RECEIVE_RSVP = 'RECEIVE_RSVP';
export const RECEIVE_RSVPS = 'RECEIVE_RSVPS';
export const REMOVE_RSVP = 'REMOVE_RSVP';

const receiveRsvp = (data) => {
  return {
    type: 'RECEIVE_RSVP',
    data
  }
}

const receiveRsvps = (rsvps) => {
  return {
    type: RECEIVE_RSVPS,
    rsvps
  }
}

const removeRspv = id => {
  return {
    type: REMOVE_RSVP,
    id
  }
}

export const fetchRsvp = (id) => dispatch => {
  return RsvpAPIUtil.fetchRsvp(id)
    .then(rsvp => dispatch(receiveRsvp(rsvp)));
}

export const fetchRsvps = () => dispatch => {
  return RsvpAPIUtil.fetchRsvps()
    .then(rsvps => dispatch(receiveRsvps(rsvps)));
}

export const rsvp = data => dispatch => {
  return RsvpAPIUtil.rsvp(data)
    .then(rsvp => dispatch(receiveRsvp(rsvp)));
}

export const cancelRsvp = () => dispatch => {
  return RsvpAPIUtil.cancelRsvp()
    .then(id => dispatch(removeRspv(id)));
}

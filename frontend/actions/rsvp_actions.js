import * as RsvpAPIUtil from '../util/rsvp_util';

export const RECEIVE_RSVP = 'RECEIVE_RSVP';
export const RECEIVE_RSVPS = 'RECEIVE_RSVPS';
export const REMOVE_RSVP = 'REMOVE_RSVP';

const receiveRsvp = (rsvp) => {
  return {
    type: 'REC'
  }
}

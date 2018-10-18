import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';
import eventsReducer from './events_reducer';
import joinGroupsReducer from './join_groups_reducers';
import rsvpReducer from './rsvp_reducer';

export default combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  events: eventsReducer,
  joinGroups: joinGroupsReducer,
  rsvp: rsvpReducer,
});

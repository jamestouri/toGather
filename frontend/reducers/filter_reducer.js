import merge from 'lodash/merge';

import { UPDATE_FILTER} from '../actions/filter_actions';

const defaultFilter = Object.freeze({
  search: '',
  distance: 2,
  location: 'San Francisco, CA',
});

const filtersReducer = (state = defaultFilter, action) => {
  Object.freeze(state);
  if(action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;

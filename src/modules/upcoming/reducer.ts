import { createReducer } from 'typesafe-actions';
import { UpcomingAction, UpcomingState } from './types';
import { GET_UPCOMING_LIST } from './actions';

const initialState: UpcomingState = {
  page: null,
  results: [],
  dates: null,
  totalPages: null,
  totalResults: null
};

const upcoming = createReducer<UpcomingState, UpcomingAction>(initialState, {
  [GET_UPCOMING_LIST]: (state, action) => ({
    ...state,
    data: action.payload
  })
});

export default upcoming;

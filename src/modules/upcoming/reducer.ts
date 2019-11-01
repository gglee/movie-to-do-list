import { createReducer } from 'typesafe-actions';
import { UpcomingAction, UpcomingState, Upcoming } from './types';
import { SET_UPCOMING_LIST } from './actions';
import produce from 'immer';

const initialState: UpcomingState = {
  page: null,
  results: [],
  dates: null,
  total_pages: null,
  total_results: null
};

const upcoming = createReducer<UpcomingState, UpcomingAction>(initialState, {
  [SET_UPCOMING_LIST]: (state, action) => {
    const movies = action.payload.results.map(result => ({
      ...result,
      liked: false
    }));
    return produce(state, draft => {
      draft.page = action.payload.page;
      draft.results = movies;
      draft.dates = action.payload.dates;
      draft.total_pages = action.payload.total_pages;
      draft.total_results = action.payload.total_results;
    });
  }
});

export default upcoming;

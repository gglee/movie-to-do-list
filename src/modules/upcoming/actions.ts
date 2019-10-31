import { createAction } from 'typesafe-actions';
import { Upcoming } from './types';
import * as UpcomingApi from '../../lib/api/movies';

export const GET_UPCOMING_LIST = 'upcoming/GET_UPCOMING_LIST';
export const SET_UPCOMING_LIST = 'upcoming/SET_UPCOMING_LIST';

export const getUpcomingList = createAction(
  GET_UPCOMING_LIST,
  UpcomingApi.getUpcomingList
)();

export const setUpcomingList = createAction(
  SET_UPCOMING_LIST
)<Upcoming | null>();

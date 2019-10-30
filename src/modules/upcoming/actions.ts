import { createAction } from 'typesafe-actions';
import * as UpcomingApi from '../../lib/api/movies';

export const GET_UPCOMING_LIST = 'upcoming/GET_UPCOMING_LIST';

export const getUpcomingList = createAction(
  GET_UPCOMING_LIST,
  UpcomingApi.getUpcomingList
)();

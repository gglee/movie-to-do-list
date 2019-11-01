import { createAction } from 'typesafe-actions';
import { UpcomingState } from './types';

export const SET_UPCOMING_LIST = 'upcoming/SET_UPCOMING_LIST';
export const ADD_UPCOMING_LIST = 'upcoming/ADD_UPCOMING_LIST';
export const TOGGLE_HEART = 'upcoming/TOGGLE_HEART';

export const setUpcomingList = createAction(SET_UPCOMING_LIST)<UpcomingState>();
export const addUpcomingList = createAction(ADD_UPCOMING_LIST)<UpcomingState>();
export const toggleHeart = createAction(TOGGLE_HEART)<number>();

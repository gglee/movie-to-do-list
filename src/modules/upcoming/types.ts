import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UpcomingAction = ActionType<typeof actions>;

export type Upcoming = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  poster_path: string | null;
  genre_ids: number[];
};

export type Dates = {
  maximum: string;
  minimun: string;
};

export type UpcomingState = {
  page: number | null;
  results: Upcoming[];
  dates: Dates | null;
  total_pages: number | null;
  total_results: number | null;
};

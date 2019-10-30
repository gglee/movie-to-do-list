import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UpcomingAction = ActionType<typeof actions>;

export type Upcoming = {
  id: number;
  title: string;
  averageVote: number;
  overview: string;
  releaseDate: string;
  poster: string | null;
  genres: number[];
};

export type Dates = {
  maximum: string;
  minimun: string;
};

export type UpcomingState = {
  page: number | null;
  results: Upcoming[];
  dates: Dates | null;
  totalPages: number | null;
  totalResults: number | null;
};

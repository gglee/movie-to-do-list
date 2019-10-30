import axios from '../defaultClient';

export const getUpcomingList = () => {
  return axios.get(
    '/3/movie/upcoming?api_key=73e85204ca757b2b2dc87226c0ba7a0e'
  );
};

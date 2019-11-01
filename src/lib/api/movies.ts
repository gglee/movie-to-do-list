import axios from '../defaultClient';

export const getUpcomingList = async () => {
  const response = await axios.get(
    '/3/movie/upcoming?api_key=73e85204ca757b2b2dc87226c0ba7a0e'
  );
  return response.data;
};

export const getUpcomingListByPage = async (page: number) => {
  const response = await axios.get(
    `/3/movie/upcoming?api_key=73e85204ca757b2b2dc87226c0ba7a0e&page=${page}`
  );
  return response.data;
};

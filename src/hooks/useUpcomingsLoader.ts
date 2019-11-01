import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpcomingList } from '../modules/upcoming';
import { getUpcomingList } from '../lib/api/movies';
import { RootState } from '../modules';

export default function useUpcomingsLoader() {
  const dispatch = useDispatch();
  const prevList = useSelector((state: RootState) => state.upcoming);

  const onGetUpcomingList = useCallback(async () => {
    try {
      const list = await getUpcomingList();
      dispatch(setUpcomingList(list));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    if (prevList.results.length === 0) onGetUpcomingList();
  }, [prevList]);
}

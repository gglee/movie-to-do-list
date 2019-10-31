import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUpcomingList } from '../modules/upcoming';
import { getUpcomingList } from '../lib/api/movies';

export default function useUpcomingsLoader() {
  const dispatch = useDispatch();

  const onGetUpcomingList = useCallback(async () => {
    try {
      const list = await getUpcomingList();
      dispatch(setUpcomingList(list));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    onGetUpcomingList();
  });
}

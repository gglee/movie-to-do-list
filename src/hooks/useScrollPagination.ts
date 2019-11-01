import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getScrollBottom } from '../lib/utils';
import { getUpcomingListByPage } from '../lib/api/movies';
import { addUpcomingList } from '../modules/upcoming';
import { RootState } from '../modules';

type Params = {
  offset?: number | null;
  stop?: boolean;
  onLoadMore?: (page: number) => any;
};

export default function useScrollPagination({ offset, stop }: Params) {
  const dispatch = useDispatch();
  const lastPage = useSelector(
    (state: RootState) => state.upcoming.total_pages
  );

  const onGetUpcomingListByPage = useCallback(
    async (offset: number) => {
      try {
        const list = await getUpcomingListByPage(offset);
        dispatch(addUpcomingList(list));
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch]
  );

  const loadMoreUsingOffset = useCallback(() => {
    if (stop || !offset || !onGetUpcomingListByPage) return;
    if (offset === last.current) return;
    if (offset === lastPage) return;
    onGetUpcomingListByPage(offset);
    last.current = offset;
  }, [stop, offset, onGetUpcomingListByPage, lastPage]);

  const last = useRef<string | number | null>(null);

  const onScroll = useCallback(() => {
    const scrollBottom = getScrollBottom();
    if (scrollBottom < 768) {
      loadMoreUsingOffset();
    }
  }, [loadMoreUsingOffset]);

  useEffect(() => {
    console.log('register scroll event');
    window.addEventListener('scroll', onScroll);
    return () => {
      console.log('unregister scroll event');
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}

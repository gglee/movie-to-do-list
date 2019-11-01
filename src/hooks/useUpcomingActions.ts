import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleHeart } from '../modules/upcoming';

export default function useUpcomingActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleHeart(id)), [id, dispatch]);

  return { onToggle };
}

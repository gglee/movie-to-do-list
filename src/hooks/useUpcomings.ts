import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useUpcomings() {
  const upcomings = useSelector((state: RootState) => state.upcoming);
  return upcomings;
}

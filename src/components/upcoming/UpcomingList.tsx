import React from 'react';
import styled from 'styled-components';
import MovieCard from '../common/MovieCard';
import useUpcomings from '../../hooks/useUpcomings';
import useUpcomingsLoader from '../../hooks/useUpcomingsLoader';

const UpcomingListBlock = styled.div``;

function UpcomingList() {
  useUpcomingsLoader();
  const upcomings = useUpcomings();

  if (upcomings.results.length === 0) return <p>No results found.</p>;

  return (
    <UpcomingListBlock>
      {upcomings.results.map(up => (
        <MovieCard key={up.id} upcoming={up} />
      ))}
    </UpcomingListBlock>
  );
}

export default UpcomingList;

import React from 'react';
import styled from 'styled-components';
import MovieCard from '../common/MovieCard';
import useUpcomings from '../../hooks/useUpcomings';
import useUpcomingsLoader from '../../hooks/useUpcomingsLoader';

const UpcomingListBlock = styled.div`
  h2 {
    font-size: 1.5em;
    margin: 0 0 4px 0;
    font-weight: 600;
  }
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

function UpcomingList() {
  useUpcomingsLoader();
  const upcomings = useUpcomings();

  if (upcomings.results.length === 0)
    return (
      <UpcomingListBlock>
        <h2>Upcoming Movies</h2>
        <p>No results found.</p>
      </UpcomingListBlock>
    );

  return (
    <UpcomingListBlock>
      <h2>Upcoming Movies</h2>
      <div className="movie-list">
        {upcomings.results.map(result => (
          <MovieCard key={result.id} upcoming={result} />
        ))}
      </div>
    </UpcomingListBlock>
  );
}

export default UpcomingList;

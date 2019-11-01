import React from 'react';
import styled from 'styled-components';
import MovieCard from '../common/MovieCard';
import useUpcomings from '../../hooks/useUpcomings';

const WatchListBlock = styled.div`
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

function WatchList() {
  const upcomings = useUpcomings();

  const watchList = upcomings.results.filter(r => r.liked === true);
  const sortedWatchList = watchList.sort((a, b) => {
    const dateA = new Date(a.release_date);
    const dateB = new Date(b.release_date);
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });
  if (upcomings.results.length === 0)
    return (
      <WatchListBlock>
        <h2>My Watch List</h2>
      </WatchListBlock>
    );

  return (
    <WatchListBlock>
      <h2>My Watch List</h2>
      <div className="movie-list">
        {sortedWatchList.map(result => (
          <MovieCard key={result.id} upcoming={result} />
        ))}
      </div>
    </WatchListBlock>
  );
}

export default WatchList;

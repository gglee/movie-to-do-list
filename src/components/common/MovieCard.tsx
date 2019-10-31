import React from 'react';
import styled from 'styled-components';
import { Upcoming } from '../../modules/upcoming';

const MovieCardBlock = styled.div``;

type MovieCardProps = {
  upcoming: Upcoming;
};

function MovieCard({ upcoming }: MovieCardProps) {
  return (
    <MovieCardBlock>
      <div className="image-content">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${upcoming.poster_path}`}
          alt={upcoming.title}
        />
      </div>
      <div className="info">
        <div className="wrapper">
          <div className="average">{upcoming.vote_average}</div>
          <div className="title">{upcoming.title}</div>
          <div className="release-date">{upcoming.release_date}</div>
        </div>
        <div className="overview">{upcoming.overview}</div>
        <div className="ganres"></div>
        <div className="add-watch"></div>
      </div>
    </MovieCardBlock>
  );
}

MovieCard.defaultProps = {
  id: 338967,
  title: 'Zombieland: Double Tap',
  averageVote: 7.5,
  overview:
    'The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.',
  releaseDate: '2019-10-18',
  poster: '/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg',
  genres: [28, 35, 27]
};
export default MovieCard;

import React from 'react';
import styled from 'styled-components';
import { Upcoming } from '../../modules/upcoming';
import { ReactComponent as FavoriteIcon } from '../../static/svg/favorite.svg';
import { ReactComponent as HeartIcon } from '../../static/svg/heart.svg';
import useUpcomingActions from '../../hooks/useUpcomingActions';

const MovieCardBlock = styled.div`
  margin-top: 16px;
  color: #000;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  .image-content {
    position: relative;
    width: 185px;
    height: 278px;
    line-height: 0;
    overflow: hidden;
    img {
      width: 185px;
      height: 278px;
      opacity: 1;
    }
    .watch-button {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3rem;
      background: #282a35;
      display: flex;
      padding-left: 1rem;
      padding-right: 1rem;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
  .info {
    width: 298px;
    height: 278px;
    position: relative;
    padding: 10px 16px 16px 16px;
    overflow: hidden;
    .wrapper {
      display: flex;
      .average {
        font-weight: 700;
        font-size: 20px;
        display: flex;
        align-items: center;
      }
      .title-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: 10px;
        .title {
          width: 100%;
          display: block;
          font-weight: 600;
          font-size: 1.1em;
          line-height: 1.1em;
        }
        .release-date {
          color: rgba(0, 0, 0, 0.6);
          line-height: 1em;
          font-size: 15px;
        }
      }
    }
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0;
      line-height: 1.2em;
      width: 100%;
      margin: 0;
    }
    .overview {
      word-wrap: break-word;
      white-space: normal;
      color: #4d4d4d;
      font-size: 11px;
      line-height: 1.2em;
      margin-top: 30px;
    }
  }
`;

type MovieCardProps = {
  upcoming: Upcoming;
};

function MovieCard({ upcoming }: MovieCardProps) {
  const { onToggle } = useUpcomingActions(upcoming.id);
  return (
    <MovieCardBlock>
      <div className="image-content">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${upcoming.poster_path}`}
          alt={upcoming.title}
        />
        <div className="watch-button">
          <div className="icon" onClick={onToggle}>
            {upcoming.liked ? <FavoriteIcon /> : <HeartIcon />}
          </div>
        </div>
      </div>
      <div className="info">
        <div className="wrapper">
          <div className="average">{upcoming.vote_average}</div>
          <div className="title-wrapper">
            <div className="title">{upcoming.title}</div>
            <div className="release-date">{upcoming.release_date}</div>
          </div>
        </div>
        <p className="overview">{upcoming.overview}</p>
        <div className="ganres"></div>
      </div>
    </MovieCardBlock>
  );
}

export default MovieCard;

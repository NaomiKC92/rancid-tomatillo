import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';

const Movie = ({id, title, releaseDate, poster, backdrop, overview, avgRating, userRating }) => {
  return (
    <article className='movie-card'>
      <img src={poster} className='movie-poster'/>
      <h2>{title}</h2>
      <p>{releaseDate}</p>
      <p>{overview}</p>
      <p>{avgRating}</p>
      <p>Your Rating: {userRating ? userRating : ''}</p>
      <Link to={`movies/${id}`}>Show More</Link>
    </article>
  )
}

export default Movie

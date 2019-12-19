import React from 'react';
import { user } from '../Reducers/UserReducer';

const MoviePage = ({ title, release_date, poster_path, backdrop_path, overview, average_rating, user_rating }) => {
  return (
    <section className='movie-page'>
      <h1>{title}</h1>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>{average_rating}</p>
      <p>{user_rating}</p>
    </section>
  )
}

export default MoviePage


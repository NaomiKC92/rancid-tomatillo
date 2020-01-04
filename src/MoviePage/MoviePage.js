import React from 'react';
import { user } from '../Reducers/UserReducer';

const MoviePage = ({ id, title, release_date, poster_path, backdrop_path, overview, average_rating, user }) => {
  let userRating;
  if (user && user.ratings.find(rating => rating.movie_id === id)) {
    userRating = user.ratings.find(rating => rating.movie_id === id).rating
  }
  return (
    <section className='movie-page'>
      <h1>{title}</h1>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>{average_rating}</p>
      <p>{userRating ? userRating : ''}</p>
    </section>
  )
}

export default MoviePage

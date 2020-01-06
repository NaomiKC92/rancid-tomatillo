import React from 'react';
import RatingForm from '../Containers/RatingForm/RatingForm';

const MoviePage = ({ id, title, release_date, poster_path, backdrop_path, overview, average_rating, user }) => {
  let userRating;
  if (user && user.ratings.find(rating => rating.movie_id === id)) {
    userRating = user.ratings.find(rating => rating.movie_id === id)
  }
  return (
    <section className='movie-page'>
      <h1>{title}</h1>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>Average Rating: {average_rating}</p>
      <p>{userRating ? `Your Rating: ${userRating.rating}` : ''}</p>
      {user && <RatingForm userId={user.id} ratingId={userRating ? userRating.id : undefined} movieId={id}/>}
    </section>
  )
}

export default MoviePage

import React from 'react';
import RatingForm from '../Containers/RatingForm/RatingForm';
import PropTypes from 'prop-types';
import './MoviePage.scss'

const MoviePage = ({ id, title, release_date, poster_path, backdrop_path, overview, average_rating, user }) => {
  let userRating;
  if (user && user.ratings.find(rating => rating.movie_id === id)) {
    userRating = user.ratings.find(rating => rating.movie_id === id)
  }

  let releaseDate = release_date.split('-').reverse().join('/').slice(3);

  let avgRating = average_rating.toFixed();
  

  return (
    <section className='movie-page'>
      <img src={backdrop_path} className='backdrop'/>
      <div className='movie-page-info'>
        <h1 className='movie-page-title'>{title}</h1>
        <p className='release-date'>Released: {releaseDate}</p>
        <p className='overview'>{overview}</p>
        <div className='page-ratings'>
          <p>Avg Rating: {avgRating}</p>
          <p className='your-rating'>{userRating ? `Your Rating: ${userRating.rating}` : ''}</p>
        </div>
          {user && <RatingForm userId={user.id} ratingId={userRating ? userRating.id : undefined} movieId={id}/>}
      </div>
    </section>
  )
}

export default MoviePage;

MoviePage.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  overview: PropTypes.string,
  average_rating: PropTypes.number,
  user: PropTypes.object
}

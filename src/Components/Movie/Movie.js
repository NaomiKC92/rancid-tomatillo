import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';
import RatingForm from '../../Containers/RatingForm/RatingForm';
import PropTypes from 'prop-types';

const Movie = ({id, title, releaseDate, poster, backdrop, overview, avgRating, user }) => {
  let userRating;
  if (user && user.ratings.find(rating => rating.movie_id === id)) {
    userRating = user.ratings.find(rating => rating.movie_id === id);
  }

  releaseDate = releaseDate.split("-").reverse().join("/").slice(3)

  return (
    <article className='movie-card'>
      <img src={poster} className='movie-poster'/>
      <section className='all-card-info'>
        <div className='title-rating-wrap'>
          <div className='title-date'>
            <h2 className='movie-card-title'>{title}</h2>
            <p className='release-date'>Released: {releaseDate}</p>
          </div>
          <div className='ratings-section'>
            <p className='avg-rating'>Avg Rating: {avgRating.toFixed()}</p>
            {userRating && <p className='your-rating'> Your Rating: {userRating.rating}</p>}
            {user && <RatingForm userId={user.id} ratingId={userRating ? userRating.id : undefined} movieId={id}/>}
          </div>
        </div>
        <Link to={`movies/${id}`} className='show-more'>Show More</Link>
      </section>
    </article>
  )
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  poster: PropTypes.string,
  backdrop: PropTypes.string,
  overview: PropTypes.string,
  avgRating: PropTypes.number,
  user: PropTypes.object 
}

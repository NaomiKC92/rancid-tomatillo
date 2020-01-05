import React, { Component } from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';
import RatingForm from '../../Containers/RatingForm/RatingForm';

const Movie = ({id, title, releaseDate, poster, backdrop, overview, avgRating, userRating, user }) => {

  return (
    <article className='movie-card'>
      <img src={poster} className='movie-poster'/>
      <h2>{title}</h2>
      <p>{releaseDate}</p>
      <p>{overview}</p>
      <p>{avgRating}</p>
      {userRating && <p> Your Rating: {userRating}</p>}
      {user && <RatingForm userId={user.id} movieId={id}/>}
      <Link to={`movies/${id}`}>Show More</Link>
    </article>
  )
}


export default Movie

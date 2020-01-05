import React from 'react';
import { user } from '../Reducers/UserReducer';

const MoviePage = ({ id, title, release_date, poster_path, backdrop_path, overview, average_rating, user }) => {
  let userRating;
  if (user) {
    console.log(user);
    let userRating = user.ratings.find(rating => rating.movie_id === id)
      <p>{userRating ? userRating : ''}</p>
    </section>
  )
}

export default MoviePage

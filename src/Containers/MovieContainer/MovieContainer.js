import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../../Components/Movie/Movie';
import Loading from '../../Components/Loading/Loading';
import { getMovies } from '../../apiCalls';
import { setMovies, changeLoading } from '../../Actions';

export class MovieContainer extends Component {
  componentDidMount() {
    getMovies()
      .then(data => {
        this.props.setMovies(data.movies);
        this.props.changeLoading(true)
      })
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />
    }
    const displayMovies = this.props.movies.map(movie => {
      if (this.props.user && this.props.user.ratings.find(rating => rating.movie_id === movie.id)) {
        let foundRating = this.props.user.ratings.find(rating => rating.movie_id === movie.id);
        movie.userRating = foundRating.rating;
      }
      return (
        <Movie
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          backdrop={movie.backdrop_path}
          releaseDate={movie.release_date}
          overview={movie.overview}
          avgRating={movie.average_rating}
          userRating={movie.userRating}
          user={this.props.user}
          key={movie.id}
        />
      )
    })

    return (
      <main>
        <h1>Oh hello - Movies Here</h1>
        {displayMovies}
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.isLoading,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  changeLoading: (isLoading) => dispatch( changeLoading(isLoading)),
  setMovies: (movies) => dispatch(setMovies(movies))
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

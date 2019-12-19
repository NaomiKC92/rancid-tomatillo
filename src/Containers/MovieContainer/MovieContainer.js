import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../../Components/Movie/Movie';
import Loading from '../../Components/Loading/Loading';
import { getMovies } from '../../apiCalls';
import { setMovies, changeLoading } from '../../Actions';

class MovieContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    getMovies()
      .then(data => {
        this.props.setMovies(data.movies);
        this.props.changeLoading(this.props.isLoading)
      })
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />
    }
    const displayMovies = this.props.movies.map( movie => {
      return (
        <Movie 
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          backdrop={movie.backdrop_path}
          releaseDate={movie.release_date}
          overview={movie.overview}
          avgRating={movie.avg_rating}
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

const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  changeLoading: (isLoading) => dispatch( changeLoading(isLoading)),
  setMovies: (movies) => dispatch(setMovies(movies))
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

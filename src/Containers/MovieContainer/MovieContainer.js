import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../../Components/Movie/Movie';
import Loading from '../../Components/Loading/Loading';

class MovieContainer extends Component {
  constructor() {
    super();
  }
  // const displayMovies = movies.map(movie => {
  //   return (
  //     <Movie
  //       {...movie}
  //       key={movie.id}
  //     />
  //   )
  // })
  render() {
    if (this.props.state.isLoading) {
      return <Loading />
    }
    return (
      <main>
        <h1>Oh hello - Movies Here</h1>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => {

}


export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

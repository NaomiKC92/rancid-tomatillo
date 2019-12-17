import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../../Components/Movie/Movie';
import Loading from '../../Components/Loading/Loading';

class MovieContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //add the apiCall
    //then we will set the state with the Movies
    //this will need to trigger mapDispatchToProps with isLoading and Movies changing
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
    if (this.props.isLoading) {
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

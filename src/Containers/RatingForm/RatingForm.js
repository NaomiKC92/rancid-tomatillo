import React, { Component } from 'react';
import { postRating, getUserRatings } from '../../apiCalls';
import { updateRatings } from '../../Actions';
import { connect } from 'react-redux';
import { getMovies } from '../../apiCalls';
import { setMovies } from '../../Actions';




class RatingForm extends Component {
  constructor() {
    super();
    this.state = {
      currentRating: null
    }
  }

  changeRating = number => {
    this.setState({ currentRating: parseInt(number) })
  }

  render() {
    return (
      <>
        <select name='rating' onChange={e => this.changeRating(e.target.value)}>
          <option value=''>--Rate Movie--</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        <button onClick={() => {
          postRating(this.props.movieId, this.state.currentRating, this.props.userId)
            .then(data => {
              getUserRatings(data.rating.user_id)
                .then(ratings => {
                  this.props.updateRatings(ratings.ratings);
                  getMovies()
                  .then(data => {
                    this.props.setMovies(data.movies);
                  })
                })
            })
        }}>SUBMIT.....DAT.....RATING</button>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateRatings: ratings => dispatch( updateRatings(ratings) ),
  setMovies: (movies) => dispatch(setMovies(movies))
})

export default connect(null, mapDispatchToProps)(RatingForm);

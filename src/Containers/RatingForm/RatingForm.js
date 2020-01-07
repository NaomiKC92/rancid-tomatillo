import React, { Component } from 'react';
import { postRating, getUserRatings, getMovies, deleteRating } from '../../apiCalls';
import { updateRatings, setMovies } from '../../Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './RatingForm.scss'


export class RatingForm extends Component {
  constructor() {
    super();
    this.state = {
      currentRating: null
    }
  }

  changeRating = number => {
    this.setState({ currentRating: parseInt(number) })
  }

  submitRating = () => {
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
  }

  updateRating = () => {
    deleteRating(this.props.userId, this.props.ratingId)
      .then(data => {
        this.submitRating();
      })
  }

  render() {
    return (
      <section className='rating-form'>
        <select name='rating' onChange={e => this.changeRating(e.target.value)}>
          <option value=''>--Rate--</option>
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
        {this.props.ratingId ? <button id='update-btn' className='rating-btn' onClick={this.updateRating}>Update</button> : 
        <button id='submit-btn' className='rating-btn' onClick={this.submitRating}>Update</button>}
      </section>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  updateRatings: ratings => dispatch( updateRatings(ratings) ),
  setMovies: (movies) => dispatch(setMovies(movies))
})

export default connect(null, mapDispatchToProps)(RatingForm);

RatingForm.propTypes = {
  updateRatings: PropTypes.func,
  setMovies: PropTypes.func,
  userId: PropTypes.number,
  ratingId: PropTypes.number,
  movieId: PropTypes.number
}

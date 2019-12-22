export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(res => {
      if (!res.ok) {
        throw Error('Oops! The Box Office must be closed!')
      }
      return res.json();
    })
};

export const getUser = (user) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options)
    .then(res => {
      if (!res.ok) {
        throw Error('Incorrect Email and/or Password')
      }
      return res.json();
    })
};

export const getUserRatings = id => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${id}/ratings`).then(res => {
    if (!res.ok) {
      throw Error('Could not find your ratings')
    }
    return res.json();
  })
}

export const postRating = (id, rating, userId) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ movie_id: id, rating }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`, options)
    .then(res => {
      if (!res.ok) {
        throw Error('Could not post your rating')
      }
    return res.json();
  })
}

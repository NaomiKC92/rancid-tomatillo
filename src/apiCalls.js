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
        throw Error('Uh-oh... Did you forget your movie ticket??')
      }
      return res.json();
    })
};

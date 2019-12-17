export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(res => {
      if (!res.ok) {
        throw Error('Oops! The Box Office must be closed!')
      }
      return res.json();
    })
};

import { getMovies, getUser, getUserRatings, postRating, deleteRating } from './apiCalls';

describe('apiCalls', () => {

  describe('getMovies', () => {
    let mockMovies;

    beforeEach( () => {
      mockMovies = [
        {title: 'Jumanji', id: 1},
        {title: 'Frozen II', id: 2},
        {title: 'Knives Out', id: 3}
      ];
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovies)
        })
      })
    });

    it('should call fetch with the correct URL', () => {
      getMovies();
      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    });

    it('should return a movies array', () => {
      expect(getMovies()).resolves.toEqual(mockMovies)
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({ok: false})
      })
      expect(getMovies()).rejects.toEqual(Error('Oops! The Box Office must be closed!'))
    });
  });

  describe('getUser', () => {
    let mockUser;

    beforeEach(() => {
      mockUser = {
        name: "John Adams"
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUser)
        })
      })
    })

    it('should call fetch with the correct url and options', () => {
      const mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockUser),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      getUser(mockUser);
      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/login', mockOptions);
    });

    it('should return the correct user when called', () => {
      expect(getUser(mockUser)).resolves.toEqual(mockUser);
    });

    it('should return an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getUser(mockUser)).rejects.toEqual(Error('Incorrect Email and/or Password'));
    })

  })

  describe('getUserRatings', () => {
    let mockId;
    let mockRatings;

    beforeEach(() => {
      mockId = 7;
      mockRatings = [
        { name: 'Moana', rating: 5 },
        { name: 'Knives Out', rating: 7 }
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockRatings)
        })
      })
    })

    it('should use fetch with the correct url', () => {
      getUserRatings(mockId);

      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/users/7/ratings');
    })

    it('should return a ratings array', () => {
      expect(getUserRatings(mockId)).resolves.toEqual(mockRatings);
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(getUserRatings(mockId)).rejects.toEqual(Error('Could not find your ratings'));
    })
  })

  describe('postRating', () => {
    let mockId;
    let mockRating;
    let mockRatingObject;
    let mockUserId;
    let mockOptions;

    beforeEach(() => {
      mockId = 15;
      mockRating = 7
      mockRatingObject = {
        movie_id: 15,
        rating: 7
      };
      mockUserId = 4;
      mockOptions = {
        method: 'POST',
        body: JSON.stringify({ movie_id: mockId, rating: mockRating }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockRatingObject)
        })
      });
    })

    it('should be called with the correct url and options', () => {
      postRating(mockId, mockRating, mockUserId);

      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/users/4/ratings', mockOptions)
    });

    it('should return a ratings object when called', () => {
      expect(postRating(mockId, mockRating, mockUserId)).resolves.toEqual(mockRatingObject);
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(postRating(mockId, mockRating, mockUserId)).rejects.toEqual(Error('Could not post your rating'));
    })
  })

  describe('deleteRating', () => {
    let mockUserId;
    let mockRatingId;
    let mockOptions;

    beforeEach(() => {
      mockUserId = 4;
      mockRatingId = 120;
      mockOptions = {
        method: 'DELETE'
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve('oh hello')
        })
      });
    })

     it('should be called with the correct url and options', () => {
       deleteRating(mockUserId, mockRatingId);

       expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/users/4/ratings/120', mockOptions);
     });

     it('should return a string of oh hello that we hard coded in to make sure it is working', () => {
       expect(deleteRating(mockUserId, mockRatingId)).resolves.toEqual('oh hello');
     });

     it('should throw an error when response is not ok', () => {
       window.fetch = jest.fn().mockImplementation(() => {
         return Promise.resolve({
           ok: false
         })
       });

       expect(deleteRating(mockUserId, mockRatingId)).rejects.toEqual(Error('Could not find rating to delete'));
     })
  })

});

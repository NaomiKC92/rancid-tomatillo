import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login';
import { addUser, changeLoading } from '../../Actions';
import { getUser, getUserRatings } from '../../apiCalls';

jest.mock('../../apiCalls.js');

describe('Login', () => {
  let wrapper;

  beforeEach( () => {
    getUser.mockImplementation(() => {
      return Promise.resolve({
        user: {
          id: 4,
          name: 'Greg',
          email: 'greg@turing.io',    
          ratings: []
        }
      });
    });
    getUserRatings.mockImplementation(() => {
      return Promise.resolve({
        ratings: [
          {
            id: 1,
            user_id: 1,
            movie_id: 1,
            rating: 6,
            created_at: "someDate",
            updated_at: "someDate"
          }
        ]
      })
    })
    wrapper = shallow(<Login 
      submitUser={jest.fn()}
      changeLoading={jest.fn()}
    />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: {name: 'email', value: 'greg@turing.io'} }
    const expected = 'greg@turing.io'

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('email')).toEqual(expected);
  })

  describe('checkInputs', () => {

    it('should switch the error state property to "error" if there is nothing in the corresponding input name', () => {
      const mockState = {
        email: '',
        password: 'abc123',
        error: {
        email: '',
        password: '',
        }
      };
      const mockErrorState = {
          email: 'error',
          password: ''
      }
      wrapper.setState(mockState);
  
      wrapper.find('button').simulate('click');
      expect(wrapper.state('error')).toEqual(mockErrorState);
    });

    it('should invoke logInUser when checkInputs is fired', () => {
      wrapper.instance().logInUser = jest.fn();
      wrapper.instance().checkInputs();

      expect(wrapper.instance().logInUser).toHaveBeenCalled();
    })
  })

  describe('logInUser', () => {
    let wrapper, mockState, mockUser;

    beforeEach(() => {
      wrapper = shallow(<Login 
        submitUser={jest.fn()}
        changeLoading={jest.fn()}
      />)
      mockUser = {
        email: 'greg@turing.io',
        password: 'abc123' 
      };
      mockState = {
        email: 'greg@turing.io',
        password: 'abc123',
        ready: false,
        message: ''
      }
    });

    it('should invoke getUser when logInUser is fired', () => {
      wrapper.setState(mockState);
      wrapper.instance().logInUser();

      expect(getUser).toHaveBeenCalledWith(mockUser);
    });

    it('should invoke getUserRatings when logInUser is fired', () => {
      wrapper.setState(mockState);
      wrapper.instance().logInUser();

      expect(getUserRatings).toHaveBeenCalledWith(4);
    });

    it('should update error state if getUser or getUserRatings promise is rejected', async () => {
      wrapper.setState(mockState);
      getUser.mockImplementation(() => Promise.reject(Error('NOOO')));

      await wrapper.instance().logInUser();
      await wrapper.instance().forceUpdate();

      expect(wrapper.state('message')).toEqual('NOOO');
    })
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    beforeEach( () => {
      mockDispatch = jest.fn();
    })

    it('should call dispatch with an addUser action when submitUser is called', () => {
      const user = {email: 'greg@turing.io', password: 'abc123'};
      const actionToDispatch = addUser(user);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.submitUser(user)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch with a changeLoading action when the changeLoading method is called', () => {
      const actionToDispatch = changeLoading(false);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.changeLoading(false);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  });
  

});

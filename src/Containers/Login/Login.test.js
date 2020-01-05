import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login';
import { addUser, changeLoading } from '../../Actions';

describe('Login', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Login />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: {name: 'email', value: 'greg@turing.io'} }
    const expected = 'greg@turing.io'

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('email')).toEqual('greg@turing.io')
  })

  //How do I test checkInputs function??
    // create mock state for whole component 
    //maybe leave one empty so that can trigger the errror
    
    //if happy path, just check that loginUser has been called

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
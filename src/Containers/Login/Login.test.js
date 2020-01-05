import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login'

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

  // REDUX TESTING

  

});
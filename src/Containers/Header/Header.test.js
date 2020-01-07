import React from 'react';
import { shallow } from 'enzyme';
import { signOut, changeLoading } from '../../Actions';
import { Header, mapDispatchToProps } from './Header';

describe('Header', () => {

  it('should match the snapshot with no user', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with a user', () => {
    const mockUser = {
      id: 4,
      name: 'Greg',
      email: 'greg@turing.io',
      ratings: []
    }
    const wrapper = shallow(<Header user={mockUser}/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('should call changeLoading on link click without a user', () => {
    const mockChangeLoading = jest.fn();
    const wrapper = shallow(<Header changeLoading={mockChangeLoading}/>);

    wrapper.find('.title-link').simulate('click');

    expect(mockChangeLoading).toHaveBeenCalledWith(true);
  });

  it('should call changeLoading on link click with a user', () => {
    const mockChangeLoading = jest.fn();
    const mockUser = {
      id: 4,
      name: 'Greg',
      email: 'greg@turing.io',
      ratings: []
    }
    const wrapper = shallow(<Header changeLoading={mockChangeLoading} user={mockUser}/>);

    wrapper.find('.title-link').simulate('click');

    expect(mockChangeLoading).toHaveBeenCalledWith(true);
  });

  it('should invoke signOut on button click', () => {
    const mockSignOut = jest.fn();
    const mockUser = {
      id: 4,
      name: 'Greg',
      email: 'greg@turing.io',
      ratings: []
    };
    const wrapper = shallow(<Header signOut={mockSignOut} user={mockUser}/>);

    wrapper.find('button').simulate('click');

    expect(mockSignOut).toHaveBeenCalled();
  });

  describe('matchDispatchToProps', () => {
    let mockDispatch;

    beforeEach( () => {
      mockDispatch = jest.fn();
    });

    it('should call dispatch with the signOut action when signOut is called', () => {
      const actionToDispatch = signOut();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.signOut();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with the changeLoading action when changeLoading is called', () => {
      const actionToDispatch = changeLoading(true);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.changeLoading(true);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  });

});

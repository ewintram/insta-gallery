import React from 'react';
import User from '../User';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('displays the user\'s username on their post', () => {
  const wrapper = shallow(<User post={data[0]}/>);
  const username = wrapper.find('h4')
  expect(username.html()).toEqual("<h4>heacan</h4>");
});

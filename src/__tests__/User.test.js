import React from 'react';
import User from '../components/User';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('displays the user\'s username on their post', () => {
  const wrapper = shallow(<User post={data[0]}/>);
  const username = wrapper.find('h2')
  expect(username.html()).toEqual("<h2>heacan</h2>");
});

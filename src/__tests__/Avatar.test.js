import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '../Avatar';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the avatar', () => {
  const wrapper = shallow(<Avatar post={data[0]}/>);
  const avatar = wrapper.find('img')
  expect(avatar.html()).toEqual("<img width=\"64\" src=\"heacan1.jpg\" class=\"avatar\" alt=\"user icon\"/>");
});

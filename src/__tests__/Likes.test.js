import React from 'react';
import ReactDOM from 'react-dom';
import Likes from '../Likes'
import { shallow } from 'enzyme';

it('renders the button', () => {
  const wrapper = shallow(<Likes label={'Like'}/>);
  const button = wrapper.find('Button')
  expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-default\">Like</button>");
});

it('updates the likes count when the button is clicked', () => {
  const wrapper = shallow(<Likes label={'Like'}/>);
  wrapper.instance().handleClick()
  expect(wrapper.state().count).toEqual(1);
});

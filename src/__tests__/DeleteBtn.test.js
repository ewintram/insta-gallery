import React from 'react';
import DeleteBtn from '../DeleteBtn'
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

var wrapper;
var button;

beforeEach(() => {
  wrapper = shallow(<DeleteBtn />);
  button = wrapper.find('Button');
});

it('renders the button', () => {
  expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-glyphicon glyphicon-trash\"></span></button>");
});

import React from 'react';
import DeleteBtn from '../components/DeleteBtn'
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

var wrapper;
var button;
var spy;

beforeEach(() => {
  spy = jest.fn();
  wrapper = shallow(<DeleteBtn onClickDelete={spy}/>);
  button = wrapper.find('Button');
});

it('renders the button', () => {
  expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-lg btn-custom\"><span class=\"glyphicon glyphicon-glyphicon glyphicon-trash\"></span></button>");
});

it('calls onClickDelete when clicked', () => {
  button.simulate('click');
  expect(spy).toHaveBeenCalled();
});

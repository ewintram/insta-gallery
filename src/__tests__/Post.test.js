import React from 'react';
import ReactDOM from 'react-dom';
import Post from '../Post';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the photo', () => {
  const wrapper = shallow(<Post post={data[0]}/>);
  const post = wrapper.find('li')
  expect(post.html()).toEqual("<li><h4>heacan</h4><img src=\"cat1.jpeg\"/></li>");
});

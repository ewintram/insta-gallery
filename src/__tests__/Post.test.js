import React from 'react';
import ReactDOM from 'react-dom';
import Post from '../Post';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders a single post with subcomponents', () => {
  const wrapper = shallow(<Post post={data[0]}/>);
  const post = wrapper.find('li')
  expect(post.html()).toEqual("<li><img src=\"heacan1.jpg\"/><h4>heacan</h4><img src=\"cat1.jpeg\"/></li>");
});

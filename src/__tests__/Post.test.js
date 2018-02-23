import React from 'react';
import ReactDOM from 'react-dom';
import Post from '../Post';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders a single post with subcomponents', () => {
  const wrapper = shallow(<Post post={data[0]}/>);
  const post = wrapper.find('li')
  expect(post.html()).toEqual("<li><div class=\"media\"><div class=\"media-left\"><img width=\"64\" src=\"heacan1.jpg\" class=\"avatar\"/></div><div class=\"media-body\"><h4>heacan</h4></div></div><div class=\"container\"><div class=\"row\"><img src=\"cat1.jpeg\"/></div><div class=\"row\"><p>A lie is like a cat: You need to stop it before it gets out the door or it’s really hard to catch.</p></div></div></li>");
});

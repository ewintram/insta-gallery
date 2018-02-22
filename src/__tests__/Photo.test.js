import React from 'react';
import ReactDOM from 'react-dom';
import Photo from '../Photo';
import { shallow } from 'enzyme';

const mock = {
  "username": "heacan",
  "userIconLink": "heacan1.jpg",
  "imageLink": "cat1.jpeg",
  "description": "A lie is like a cat: You need to stop it before it gets out the door or it’s really hard to catch.",
  "likes": 53,
  "liked": true
};

it('renders the photo', () => {
  const wrapper = shallow(<Photo photo={mock}/>);
  const photo = wrapper.find('li')
  expect(photo.html()).toEqual("<li><img src=\"cat1.jpeg\"/></li>");
});

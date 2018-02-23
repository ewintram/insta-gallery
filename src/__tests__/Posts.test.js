import React from 'react';
import ReactDOM from 'react-dom';
import Posts from '../Posts';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the photos from all posts', () => {
  const wrapper = shallow(<Posts posts={data}/>);
  const photos = wrapper.find('ul')
  expect(photos.html()).toEqual("<ul><li><img src=\"cat1.jpeg\"/></li><li><img src=\"cat2.jpeg\"/></li><li><img src=\"cat3.jpeg\"/></li></ul>");
});

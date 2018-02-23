import React from 'react';
import ReactDOM from 'react-dom';
import Posts from '../Posts';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the photos from all posts', () => {
  const wrapper = shallow(<Posts posts={data}/>);
  const posts = wrapper.find('ul')
  expect(posts.html()).toEqual("<ul><li><div class=\"media\"><div class=\"media-left\"><img width=\"64\" src=\"heacan1.jpg\" class=\"avatar\"/></div><div class=\"media-body\"><h4>heacan</h4></div></div><div class=\"container\"><div class=\"row\"><img src=\"cat1.jpeg\"/></div></div></li><li><div class=\"media\"><div class=\"media-left\"><img width=\"64\" src=\"kaedenor1.jpg\" class=\"avatar\"/></div><div class=\"media-body\"><h4>kaedenor</h4></div></div><div class=\"container\"><div class=\"row\"><img src=\"cat2.jpeg\"/></div></div></li><li><div class=\"media\"><div class=\"media-left\"><img width=\"64\" src=\"damarionei2.jpg\" class=\"avatar\"/></div><div class=\"media-body\"><h4>damarionei</h4></div></div><div class=\"container\"><div class=\"row\"><img src=\"cat3.jpeg\"/></div></div></li></ul>");
});

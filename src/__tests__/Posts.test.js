import React from 'react';
import ReactDOM from 'react-dom';
import Posts from '../Posts';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the photos from all posts', () => {
  const wrapper = shallow(<Posts posts={data}/>);
  const posts = wrapper.find('ul')
  expect(posts.html()).toEqual("<ul><li><div class=\"media\"><div class=\"media-left\"><img width=\"64\" src=\"heacan1.jpg\" class=\"avatar\"/></div><div class=\"media-body\"><h4>heacan</h4></div></div><div class=\"container\"><div class=\"row\"><img src=\"cat1.jpeg\"/></div><div class=\"row\"><p>A lie is like a cat: You need to stop it before it gets out the door or it’s really hard to catch.</p></div></div></li><li><div class=\"media\"><div class=\"media-left\"><img width=\"64\" src=\"kaedenor1.jpg\" class=\"avatar\"/></div><div class=\"media-body\"><h4>kaedenor</h4></div></div><div class=\"container\"><div class=\"row\"><img src=\"cat2.jpeg\"/></div><div class=\"row\"><p>It is a very inconvenient habit of kittens (Alice had once made the remark) that, whatever you say to them they always purr.</p></div></div></li><li><div class=\"media\"><div class=\"media-left\"><img width=\"64\" src=\"damarionei2.jpg\" class=\"avatar\"/></div><div class=\"media-body\"><h4>damarionei</h4></div></div><div class=\"container\"><div class=\"row\"><img src=\"cat3.jpeg\"/></div><div class=\"row\"><p>Way down deep, we’re all motivated by the same urges. Cats have the courage to live by them.</p></div></div></li></ul>");
});

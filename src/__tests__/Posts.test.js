import React from 'react';
import ReactDOM from 'react-dom';
import Posts from '../Posts';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the photos from all posts', () => {
  const wrapper = shallow(<Posts posts={data}/>);
  const posts = wrapper.find('ul')
  expect(posts.html()).toEqual("<ul><li><img src=\"heacan1.jpg\"/><h4>heacan</h4><img src=\"cat1.jpeg\"/></li><li><img src=\"kaedenor1.jpg\"/><h4>kaedenor</h4><img src=\"cat2.jpeg\"/></li><li><img src=\"damarionei2.jpg\"/><h4>damarionei</h4><img src=\"cat3.jpeg\"/></li></ul>");
});

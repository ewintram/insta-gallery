import React from 'react';
import UserComment from '../components/UserComment';
import data from '../__mocks__/commentsData.json'
import { shallow } from 'enzyme';

it('renders the comment text and username', () => {
  const wrapper = shallow(<UserComment comment={data[0]}/>);
  const comment = wrapper.find('li')
  expect(comment.html()).toEqual("<li>heacan<br/>comment 1</li>");
});

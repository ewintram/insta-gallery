import React from 'react';
import UserComment from '../components/UserComment';
import { shallow } from 'enzyme';

it('renders the comment text and username', () => {
  const wrapper = shallow(<UserComment username={'Ellie'} text={'Test comment'}/>);
  const comment = wrapper.find('li')
  expect(comment.html()).toEqual("<li>Ellie<br/>Test comment</li>");
});

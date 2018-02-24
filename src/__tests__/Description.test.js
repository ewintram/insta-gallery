import React from 'react';
import Description from '../Description';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the description', () => {
  const wrapper = shallow(<Description post={data[0]}/>);
  const description = wrapper.find('p')
  expect(description.html()).toEqual("<p>A lie is like a cat: You need to stop it before it gets out the door or it’s really hard to catch.</p>");
});

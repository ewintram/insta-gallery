import React from 'react';
import Photo from '../Photo';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the photo', () => {
  const wrapper = shallow(<Photo post={data[0]}/>);
  const photo = wrapper.find('Image')
  expect(photo.html()).toEqual("<img src=\"cat1.jpeg\" alt=\"cat\" class=\"image img-responsive\"/>");
});

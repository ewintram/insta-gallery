import React from 'react';
import ReactDOM from 'react-dom';
import Photo from '../Photo';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders the photo', () => {
  const wrapper = shallow(<Photo photo={data[0]}/>);
  const photo = wrapper.find('li')
  expect(photo.html()).toEqual("<li><img src=\"cat1.jpeg\"/></li>");
});

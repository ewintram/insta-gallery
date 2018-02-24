import React from 'react';
import ReactDOM from 'react-dom';
import Btn from '../Btn'
import { shallow } from 'enzyme';

it('renders the button', () => {
  const wrapper = shallow(<Btn label={'Like'}/>);
  const button = wrapper.find('Button')
  expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-default\">Like</button>");
});

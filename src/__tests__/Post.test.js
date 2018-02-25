import TestUtils from 'react-dom/test-utils';
import React from 'react';
import Post from '../Post';
import Avatar from '../Avatar';
import DeleteBtn from '../DeleteBtn';
import Description from '../Description';
import Likes from '../Likes.js';
import Photo from '../Photo';
import User from '../User';
import { shallow } from 'enzyme';
jest.mock('../Avatar');
jest.mock('../DeleteBtn');
jest.mock('../Description');
jest.mock('../Likes.js');
jest.mock('../Photo');
jest.mock('../User');

var component
var childComponent

beforeEach(() => {
  component = TestUtils.renderIntoDocument(<Post />);
});

it('renders an Avatar component', function() {
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Avatar);
  expect(childComponent.length).toEqual(1);
});

it('renders an DeleteBtn component', function() {
  childComponent = TestUtils.scryRenderedComponentsWithType(component, DeleteBtn);
  expect(childComponent.length).toEqual(1);
});

it('renders an Description component', function() {
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Description);
  expect(childComponent.length).toEqual(1);
});

it('renders a Likes component', function() {
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Likes);
  expect(childComponent.length).toEqual(1);
});

it('renders an Photo component', function() {
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Photo);
  expect(childComponent.length).toEqual(1);
});

it('renders an User component', function() {
  childComponent = TestUtils.scryRenderedComponentsWithType(component, User);
  expect(childComponent.length).toEqual(1);
});

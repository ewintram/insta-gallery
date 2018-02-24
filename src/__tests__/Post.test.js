import TestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Post from '../Post';
import Avatar from '../Avatar';
import Likes from '../Likes.js';
import Description from '../Description';
import Photo from '../Photo';
import User from '../User';
import { shallow } from 'enzyme';
jest.mock('../Avatar');
jest.mock('../Likes.js');
jest.mock('../Description');
jest.mock('../Photo');
jest.mock('../User');

var component
var childComponent

it('renders an Avatar component', function() {
  component = TestUtils.renderIntoDocument(<Post />);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Avatar);

  expect(childComponent.length).toEqual(1);
});

it('renders an Description component', function() {
  component = TestUtils.renderIntoDocument(<Post />);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Description);

  expect(childComponent.length).toEqual(1);
});

it('renders a Likes component', function() {
  component = TestUtils.renderIntoDocument(<Likes lable={'Like'}/>);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Likes);

  expect(childComponent.length).toEqual(1);
});

it('renders an Photo component', function() {
  component = TestUtils.renderIntoDocument(<Post />);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Photo);

  expect(childComponent.length).toEqual(1);
});

it('renders an User component', function() {
  component = TestUtils.renderIntoDocument(<Post />);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, User);

  expect(childComponent.length).toEqual(1);
});

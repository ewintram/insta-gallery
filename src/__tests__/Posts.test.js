import TestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Posts from '../Posts';
import Post from '../Post';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';
jest.mock('../Post');

var component
var childComponent

it('renders all of the Post components', function() {
  component = TestUtils.renderIntoDocument(<Posts posts={data}/>);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Post);

  expect(childComponent.length).toEqual(3);
});

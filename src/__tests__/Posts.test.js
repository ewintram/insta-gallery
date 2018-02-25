import TestUtils from 'react-dom/test-utils';
import React from 'react';
import Posts from '../components/Posts';
import Post from '../components/Post';
import data from '../__mocks__/data.json';
jest.mock('../components/Post');

var component
var childComponent

it('renders all of the Post components', function() {
  component = TestUtils.renderIntoDocument(<Posts posts={data}/>);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Post);
  expect(childComponent.length).toEqual(3);
});

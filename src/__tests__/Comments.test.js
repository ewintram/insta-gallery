import TestUtils from 'react-dom/test-utils';
import React from 'react';
import Comments from '../components/Comments';
import UserComment from '../components/UserComment';
import CommentsForm from '../components/CommentsForm';
import data from '../__mocks__/commentsData.json'
import { shallow } from 'enzyme';
jest.mock('../components/UserComment');
jest.mock('../components/CommentsForm');

var component
var childComponent

it('renders all of the Comments components', function() {
  component = TestUtils.renderIntoDocument(<Comments comments={data}/>);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, UserComment);
  expect(childComponent.length).toEqual(3);
});

it('renders the CommentsForm component', function() {
  component = TestUtils.renderIntoDocument(<Comments comments={data}/>);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, CommentsForm);
  expect(childComponent.length).toEqual(1);
});

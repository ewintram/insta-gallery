import TestUtils from 'react-dom/test-utils';
import React from 'react';
import Post from '../components/Post';
import Avatar from '../components/Avatar';
import DeleteBtn from '../components/DeleteBtn';
import Description from '../components/Description';
import Likes from '../components/Likes.js';
import Photo from '../components/Photo';
import User from '../components/User';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';
jest.mock('../components/Avatar');
jest.mock('../components/DeleteBtn');
jest.mock('../components/Description');
jest.mock('../components/Likes.js');
jest.mock('../components/Photo');
jest.mock('../components/User');

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

describe('onClickDelete', () => {
  it('calls the removePost function', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Post post={data[0]} index='0' removePost={spy}/>);
    wrapper.instance().onClickDelete();
    expect(spy).toHaveBeenCalled();
  });
})

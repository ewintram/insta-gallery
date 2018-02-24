import TestUtils from 'react-dom/test-utils';
import React from 'react';
import Likes from '../Likes'
import { shallow, mount } from 'enzyme';

var wrapper;
var button;
var count;

beforeEach(() => {
  wrapper = mount(<Likes />);
  button = wrapper.find('Button');
  count = wrapper.find('span');
});

it('renders the button', () => {
  expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-default\">Like</button>");
});

it('renders the initial likes count as 0', () => {
  expect(count.html()).toEqual("<span class=\"count\">0 likes</span>");
});

describe('handleClick', () => {

  it('renders the updated likes count when the button is clicked', () => {
    wrapper.find('Button').simulate('click')
    expect(count.html()).toEqual("<span class=\"count\">1 like</span>");
  });

  it('updates the likes count by 1 when called', () => {
    wrapper.instance().handleClick()
    expect(wrapper.state().count).toEqual(1);
  });

  it('updates the likes count by -1 when called again', () => {
    wrapper.instance().handleClick()
    wrapper.instance().handleClick()
    expect(wrapper.state().count).toEqual(0);
  });

  it('changes the style to primary when called', () => {
    wrapper.instance().handleClick()
    expect(wrapper.state().bsStyle).toEqual("primary");
  });

  it('changes the style back to default when called again', () => {
    expect(wrapper.state().bsStyle).toEqual("default");
    wrapper.instance().handleClick()
    wrapper.instance().handleClick()
    expect(wrapper.state().bsStyle).toEqual("default");
  });

  it('changes the label to \'Liked\' when called', () => {
    wrapper.instance().handleClick()
    expect(wrapper.state().label).toEqual('Liked');
  });

  it('changes the label back to \'Like\' when called again', () => {
    wrapper.instance().handleClick()
    wrapper.instance().handleClick()
    expect(wrapper.state().label).toEqual('Like');
  });

  it('renders the button as \'Liked\' when clicked', () => {
    wrapper.find('Button').simulate('click')
    expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-primary\">Liked</button>");
  });
});

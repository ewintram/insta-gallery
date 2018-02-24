import React from 'react';
import ReactDOM from 'react-dom';
import Likes from '../Likes'
import { shallow } from 'enzyme';

it('renders the button', () => {
  const wrapper = shallow(<Likes />);
  const button = wrapper.find('Button')
  expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-default\">Like</button>");
});

it('renders the initial likes count as 0', () => {
  const wrapper = shallow(<Likes />);
  const count = wrapper.find('span')
  expect(count.html()).toEqual("<span class=\"count\">0 likes</span>");
});

describe('handleClick', () => {

  it('renders the updated likes count when the button is clicked', () => {
    const wrapper = shallow(<Likes />);
    wrapper.find('Button').simulate('click')
    const count = wrapper.find('span')
    expect(count.html()).toEqual("<span class=\"count\">1 likes</span>");
  });

  it('updates the likes count by 1 when called', () => {
    const wrapper = shallow(<Likes />);
    wrapper.instance().handleClick()
    expect(wrapper.state().count).toEqual(1);
  });

  it('updates the likes count by -1 when called again', () => {
    const wrapper = shallow(<Likes />);
    wrapper.instance().handleClick()
    wrapper.instance().handleClick()
    expect(wrapper.state().count).toEqual(0);
  });

  it('changes the style to primary when called', () => {
    const wrapper = shallow(<Likes />);
    wrapper.instance().handleClick()
    expect(wrapper.state().bsStyle).toEqual("primary");
  });

  it('changes the style back to default when called again', () => {
    const wrapper = shallow(<Likes />);
    expect(wrapper.state().bsStyle).toEqual("default");
    wrapper.instance().handleClick()
    wrapper.instance().handleClick()
    expect(wrapper.state().bsStyle).toEqual("default");
  });

  it('changes the label to \'Liked\' when called', () => {
    const wrapper = shallow(<Likes />);
    wrapper.instance().handleClick()
    expect(wrapper.state().label).toEqual('Liked');
  });

  it('changes the label back to \'Like\' when called again', () => {
    const wrapper = shallow(<Likes />);
    wrapper.instance().handleClick()
    wrapper.instance().handleClick()
    expect(wrapper.state().label).toEqual('Like');
  });

  it('renders the button as \'Liked\' when clicked', () => {
    const wrapper = shallow(<Likes />);
    wrapper.find('Button').simulate('click')
    const button = wrapper.find('Button')
    expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-primary\">Liked</button>");
  });
});

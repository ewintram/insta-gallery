import React from 'react';
import ReactDOM from 'react-dom';
import Likes from '../Likes'
import { shallow } from 'enzyme';

it('renders the button', () => {
  const wrapper = shallow(<Likes label={'Like'}/>);
  const button = wrapper.find('Button')
  expect(button.html()).toEqual("<button type=\"button\" class=\"btn btn-default\">Like</button>");
});

it('renders the initial likes count as 0', () => {
  const wrapper = shallow(<Likes label={'Like'}/>);
  const count = wrapper.find('span')
  expect(count.html()).toEqual("<span class=\"count\">0 likes</span>");
});

it('renders the updated likes count when the button is clicked', () => {
  const wrapper = shallow(<Likes label={'Like'}/>);
  wrapper.find('Button').simulate('click')
  const count = wrapper.find('span')
  expect(count.html()).toEqual("<span class=\"count\">1 likes</span>");
});

describe('handleClick', () => {
  it('updates the likes count by 1 when called', () => {
    const wrapper = shallow(<Likes label={'Like'}/>);
    wrapper.instance().handleClick()
    expect(wrapper.state().count).toEqual(1);
  });

  it('updates the likes count by -1 when called again', () => {
    const wrapper = shallow(<Likes label={'Like'}/>);
    wrapper.instance().handleClick()
    wrapper.instance().handleClick()
    expect(wrapper.state().count).toEqual(0);
  });

  it('changes the style to primary when called', () => {
    const wrapper = shallow(<Likes label={'Like'}/>);
    wrapper.instance().handleClick()
    expect(wrapper.state().bsStyle).toEqual("primary");
  });

  it('changes the style back to default when called again', () => {
    const wrapper = shallow(<Likes label={'Like'}/>);
    expect(wrapper.state().bsStyle).toEqual("default");
    wrapper.instance().handleClick()
    wrapper.instance().handleClick()
    expect(wrapper.state().bsStyle).toEqual("default");
  });
});

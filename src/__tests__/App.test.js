import TestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Posts from '../Posts';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';
jest.mock('../Posts');

var component
var childComponent

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App posts={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the Posts component', function() {
  component = TestUtils.renderIntoDocument(<App posts={data}/>);
  childComponent = TestUtils.scryRenderedComponentsWithType(component, Posts);
  expect(childComponent.length).toEqual(1);
});


describe('removePost', () => {
  it('removes the post at the specified position in the array', () => {
    const wrapper = shallow(<App posts={data}/>);
    wrapper.instance().removePost(0);
    expect(wrapper.state().posts.length).toEqual(2);
  });
})

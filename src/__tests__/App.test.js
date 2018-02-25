import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import data from '../__mocks__/data.json';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App posts={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('removePost', () => {
  it('removes the post at the specified position in the array', () => {
    const wrapper = shallow(<App posts={data}/>);
    wrapper.instance().removePost(0);
    expect(wrapper.state().posts.length).toEqual(2);
  });
})

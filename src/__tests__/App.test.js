import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import data from '../__mocks__/data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App posts={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

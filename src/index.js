import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import posts from './photoCardsData.json'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App posts={posts}/>, document.getElementById('root'));
registerServiceWorker();

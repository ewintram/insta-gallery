import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import posts from './photoCardsData.json'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App posts={posts}/>, document.getElementById('root'));
registerServiceWorker();

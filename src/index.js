import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'normalize.css/normalize.css';
import 'milligram/dist/milligram.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

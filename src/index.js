import React from 'react';
import ReactDOM from 'react-dom';
// import './css/index.css';
import App from './react/components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/scss/index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

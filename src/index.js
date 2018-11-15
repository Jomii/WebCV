import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-orbitron';
import App from './WebCv';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

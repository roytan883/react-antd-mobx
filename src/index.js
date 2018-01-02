import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.less'

import { initStaticPath } from './common/utils'

initStaticPath()

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

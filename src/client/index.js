import React from 'react';
import { hydrate } from 'react-dom';
import App from './component/App';

hydrate( <App/>, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <CardList robots={robots} />,

  document.getElementById('root'),
);

serviceWorker.unregister();

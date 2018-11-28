import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.less';
import App from './app';

const title = ' React Webpack Babel Setup!';

ReactDOM.render(
  <App title={title}/>,
  document.getElementById('app')
);

module.hot.accept();

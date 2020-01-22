import React from 'react';
import ReactDOM from 'react-dom';

var element = React.createElement(
  'h1',
  [null],
  [...'Hello, React!']
);

ReactDOM.render(element, document.getElementById('root'));

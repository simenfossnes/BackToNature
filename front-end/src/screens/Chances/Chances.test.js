import React from 'react';
import ReactDOM from 'react-dom';
import Chances from './Chances';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chances />, div);
});
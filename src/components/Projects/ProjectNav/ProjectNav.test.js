import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProjectNav from './ProjectNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ProjectNav /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

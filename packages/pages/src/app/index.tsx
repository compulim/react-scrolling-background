import './index.css';

import React from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
// import { createRoot } from 'react-dom/client';

import App from './App';

const [rootElement] = document.getElementsByTagName('MAIN');

// rootElement && createRoot(rootElement).render(<App />);
rootElement && render(<App />, rootElement);

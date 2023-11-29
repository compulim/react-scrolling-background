import './index.css';

import { createRoot } from 'react-dom/client';

import App from './App';

const [rootElement] = document.getElementsByTagName('MAIN');

rootElement && createRoot(rootElement).render(<App />);

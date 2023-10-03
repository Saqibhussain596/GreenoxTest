import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import App from './App';
import './index.css';

const root = document.getElementById('root');
const rootInstance = createRoot(root);

rootInstance.render(<App />);

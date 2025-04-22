import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import Routess from './Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routess />
  </StrictMode>
)

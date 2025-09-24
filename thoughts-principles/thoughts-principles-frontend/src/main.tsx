import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set to false to disable strict mode
const ENABLE_STRICT_MODE = true;

const AppWrapper = ENABLE_STRICT_MODE ? (
  <React.StrictMode>
    <App />
  </React.StrictMode>
) : <App />;

ReactDOM.createRoot(document.getElementById('root')!).render(AppWrapper)

import React from 'react'
import ReactDOM from 'react-dom/client'
import designStyles from '@guidepoint/design/lib/assets/css/design-namespace.css?inline';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <style id="design-namespace-styles" type="text/css">
        {designStyles}
      </style>
      <App />
    </>
  </React.StrictMode>,
)

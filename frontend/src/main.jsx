import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Theme } from '@radix-ui/themes';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Theme
      accentColor="green"
      grayColor="sage"
      radius="large"
      className='theme'
      appearance="dark"
    >
      <App />
    </Theme>
  </React.StrictMode>
  </BrowserRouter>,
)
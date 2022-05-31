// Base
import React from 'react'
import ReactDOM from 'react-dom'

// Styles
import './index.css'

// Pages
import App from './App'

// Material Ui
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/Material'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
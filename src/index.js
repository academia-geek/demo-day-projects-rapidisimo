// Base
import React from 'react'
import ReactDOM from 'react-dom'

// Styles
import './styles/index.css'

// Pages
import App from './App'

// Material Ui
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/Material';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRoutes from './routes/AppRoutes'

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
)
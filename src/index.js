// Base
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

// Components
import AppRoutes from './/routes/AppRoutes';


// Styles
import './styles/index.css'

// Material Ui
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/Material';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <AppRoutes className="scroll-app"/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
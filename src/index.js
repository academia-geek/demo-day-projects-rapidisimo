// Base
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import { Provider } from 'react-redux';
import configStore from './redux/store/configStore';

// Components
import AppRoutes from './routes/AppRoutes';


// Styles
import './styles/index.css'

// Material Ui
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/Material';

const store = configStore();

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
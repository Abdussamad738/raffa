import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/utils/store';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { AuthProvider } from "react-auth-kit";
const root = ReactDOM.createRoot(document.getElementById('root'));
const engine = new Styletron();
root.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
    <AuthProvider>
    <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
    </Provider>
    </AuthProvider>
    </StyletronProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

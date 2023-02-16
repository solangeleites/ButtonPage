import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import { MenuProvider } from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <MenuProvider>
      <App />
    </MenuProvider>
    <GlobalStyles />
  </>
);

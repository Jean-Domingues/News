import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import Head from './components/Header';

import history from './services/History';

function App() {
  return (
    <Router history={history}>
      <Head />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;

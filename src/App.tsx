import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { themeOptions } from 'components/styles/themeOptions';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'router';

function App() {
  const theme = createMuiTheme(themeOptions);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

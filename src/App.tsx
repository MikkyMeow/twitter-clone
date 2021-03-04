import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import SignIn from 'components/pages/SignIn';
import { themeOptions } from 'components/styles/themeOptions';

function App() {
  const theme = createMuiTheme(themeOptions);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    </div>
  );
}

export default App;

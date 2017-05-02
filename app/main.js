import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const StartingPoint = () => (
  <MuiThemeProvider
    muiTheme={getMuiTheme(lightBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<StartingPoint />, document.getElementById('root'))

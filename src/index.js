import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



import './css/global.css';
import App from './App';
import { StartPage } from './components/StartPage/StartPage';
import { SettingsPage } from './components/SettingsPage/SettingsPage';
import { BuildHistory } from './components/BuildHistory/BuildHistory';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/history" component={BuildHistory} />
          </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

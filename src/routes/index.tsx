import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage';
import ChatPage from '../components/pages/ChatPage';
import SCREENS from './endpoints';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={SCREENS.SCREEN_LOGIN} exact>
          <LoginPage />
        </Route>
        <Route path={SCREENS.SCREEN_MAIN} exact>
          <LoginPage />
        </Route>
        <Route path={SCREENS.SCREEN_CHAT} exact>
          <ChatPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

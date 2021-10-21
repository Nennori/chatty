import React from 'react';
// import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Button from './atoms/Button/Button.tsx';
import Field from './atoms/Field/Field.tsx';
import logo from './logo.svg';
import Header from './atoms/Header/Header.tsx';
import './App.sass';
// import Login from './pages/Login/Login.tsx';
// import Chat from './pages/Chat/Chat.tsx';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chat} />
        <Redirect from="/" to="/login" />
      </Switch> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button text="Log In" />
      <Field id="1" label="User name" type="text" placeholder="Enter your name" />
      <Field
        id="2"
        label="User name"
        isError
        errorMessage="error message"
        type="text"
        placeholder="Enter your name"
      />
      <div>
        <Header header="h1" text="header" />
        <Header header="h2" text="header" />
        <Header header="h3" text="header" />
        <Header header="h4" text="header" />
        <Header header="h5" text="header" />
        <Header header="h6" text="header" />
      </div>
    </div>
  );
}

export default App;

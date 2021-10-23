import React from 'react';
import Button from './components/atoms/Button/Button';
import Field from './components/atoms/Field/Field';
import Header from './components/atoms/Header/Header';
import './assets/styles/App.sass';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button
        disabled={false}
        onClick={() => {
          return undefined;
        }}
      >
        Log In
      </Button>
      <Button
        disabled
        onClick={() => {
          return undefined;
        }}
      >
        Log In
      </Button>
      <Field id="1" label="User name" type="text" placeholder="Enter your name" />
      <Field
        id="2"
        label="User name"
        invalid
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
};

export default App;

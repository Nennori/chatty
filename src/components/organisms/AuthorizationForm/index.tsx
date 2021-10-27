import React from 'react';
import Header from '../../atoms/Header';
import LoginForm from '../../molecules/LoginForm';
import Logo from '../../../assets/images/logo.svg';

const AuthorizationForm: React.FC = () => {
  return (
    <div className="auth-form">
      <div className="auth-form__header">
        <img src={Logo} alt="logo" />
        <Header header="h1">
          Welcome to <span style={{ color: '#5C98F1' }}>Chatty</span>
          <span style={{ color: '#B3CDF8' }}>!</span>
        </Header>
        <Header header="h2">Please, autorize yourself</Header>
      </div>
      <LoginForm />
    </div>
  );
};

export default AuthorizationForm;

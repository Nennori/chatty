import React from 'react';
import AuthorizationForm from '../../organisms/AuthorizationForm';

const Login: React.FC = () => {
  return (
    <div className="welcome">
      <main className="welcome__auth">
        <AuthorizationForm />
      </main>
      <div className="welcome__theme" />
    </div>
  );
};

export default Login;

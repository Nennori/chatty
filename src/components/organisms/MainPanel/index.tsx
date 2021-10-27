import React from 'react';
import Logo from '../../../assets/images/logo.svg';
import Profile from '../../../assets/images/profile.png';

const MainPanel: React.FC = () => {
  return (
    <div className="main-panel">
      <img className="main-panel__logo" src={Logo} alt="logo" />
      <div className="main-panel__profile">
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
};

export default MainPanel;

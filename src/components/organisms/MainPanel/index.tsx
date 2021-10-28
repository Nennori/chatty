import React from 'react';
import Logo from '../../../assets/images/logo.svg';
import Profile from '../../../assets/images/profile.png';

interface MainPanelProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

const MainPanel: React.FC<MainPanelProps> = ({ onClick }: MainPanelProps) => {
  return (
    <div className="main-panel">
      <img className="main-panel__logo" src={Logo} alt="logo" />
      <button type="button" onClick={onClick} className="main-panel__profile">
        <img src={Profile} alt="profile" />
      </button>
    </div>
  );
};

export default MainPanel;

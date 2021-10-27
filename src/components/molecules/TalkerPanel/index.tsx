import React from 'react';
import Header from '../../atoms/Header';

interface Props {
  name: string;
  status: string;
}

const TalkerPanel: React.FC<Props> = ({ name, status }: Props) => {
  return (
    <div className="talker-panel">
      <div className="talker-panel__info">
        <Header header="h3">{name}</Header>
        <Header header="h5">{status}</Header>
      </div>
    </div>
  );
};

export default TalkerPanel;

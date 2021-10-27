import React from 'react';

interface Props {
  children: React.ReactChild;
  sentByOwner: boolean;
  key: string;
}

const Message: React.FC<Props> = ({ children, sentByOwner, key }: Props) => {
  const type: string = sentByOwner ? 'sended' : 'received';
  return (
    <p key={key} className={`message message--${type}`}>
      {children}
    </p>
  );
};

export default Message;

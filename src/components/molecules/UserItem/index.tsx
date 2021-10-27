import React from 'react';
import Header from '../../atoms/Header';

interface Props {
  avatar: string;
  name: string;
  message: string;
  sentByOwner?: boolean;
  key: string;
  selected?: boolean;
}

const ChatItem: React.FC<Props> = ({
  avatar,
  name,
  message,
  sentByOwner = false,
  key,
  selected = false,
}: Props) => {
  return (
    <div className={`user-item ${selected ? 'user-item--selected' : ''}`} key={key}>
      <img className="user-item__avatar" src={avatar} alt="avatar" />
      <div className="user-item__info">
        <Header header="h4">{name}</Header>
        {sentByOwner ? (
          <Header header="h6">
            <span style={{ color: '#5E93E7' }}>You: </span>
            {message}
          </Header>
        ) : (
          <Header header="h6">{message}</Header>
        )}
      </div>
    </div>
  );
};

export default ChatItem;

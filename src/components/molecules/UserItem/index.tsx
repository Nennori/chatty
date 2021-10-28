import React from 'react';
import Header from '../../atoms/Header';

interface UserItemProps {
  avatar: string;
  name: string;
  message: string;
  sentByOwner?: boolean;
  key: string;
  selected?: boolean;
  ref: React.RefObject<HTMLDivElement>;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const UserItem: React.FC<UserItemProps> = ({
  avatar,
  name,
  message,
  sentByOwner = false,
  key,
  selected = false,
  ref,
  onClick,
}: UserItemProps) => {
  return (
    <div
      ref={ref}
      className={`user-item ${selected ? 'user-item--selected' : ''}`}
      key={key}
      role="menuitem"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={() => {
        return undefined;
      }}
    >
      <img className="user-item__avatar" src={avatar} alt="avatar" />
      <div className="user-item__info">
        <Header header="h4">{name}</Header>
        {sentByOwner ? (
          <Header header="h6">
            <span>You: </span>
            {message}
          </Header>
        ) : (
          <Header header="h6">{message}</Header>
        )}
      </div>
    </div>
  );
};

export default UserItem;

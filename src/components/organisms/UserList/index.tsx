import React, { useRef } from 'react';
import EmptyUserList from '../../../assets/images/empty_user_list.svg';
import Header from '../../atoms/Header';
import UserItem from '../../molecules/UserItem';

interface UserListProps {
  users:
    | {
        id: number;
        name: string;
        lastMessage: string;
        avatar: string;
        messageAuthorId: number;
      }[]
    | null;
  isEmpty?: boolean;
}

const UserList: React.FC<UserListProps> = ({ users }: UserListProps) => {
  const userRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    userRef.current?.focus();
  };

  return (
    <div className="user-list">
      {users === null ? (
        <div className="user-list__empty-panel">
          <img className="user-list__no-user-icon" src={EmptyUserList} alt="Empty user list" />
          <Header header="h4">There is no other users yet</Header>
        </div>
      ) : (
        users.map(({ id, name, lastMessage, avatar, messageAuthorId }) => (
          <UserItem
            ref={userRef}
            avatar={avatar}
            name={name}
            message={lastMessage}
            key={id.toString()}
            sentByOwner={messageAuthorId !== id}
            onClick={handleClick}
          />
        ))
      )}
    </div>
  );
};

export default UserList;

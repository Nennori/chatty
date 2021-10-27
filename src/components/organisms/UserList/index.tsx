import React from 'react';
import EmptyUserList from '../../../assets/images/empty_user_list.svg';
import Header from '../../atoms/Header';
import UserItem from '../../molecules/UserItem';

interface Props {
  users: {
    id: number;
    name: string;
    lastMessage: string;
    avatar: string;
    messageAuthorId: number;
  }[];
  isEmpty?: boolean;
}

const UserList: React.FC<Props> = ({ users }: Props) => {
  return (
    <div className="user-list">
      {users.length === 0 ? (
        <div className="user-list__empty-panel">
          <img className="user-list__no-user-icon" src={EmptyUserList} alt="Empty user list" />
          <Header header="h4">There is no other users yet</Header>
        </div>
      ) : (
        users.map(({ id, name, lastMessage, avatar, messageAuthorId }) => (
          <UserItem
            avatar={avatar}
            name={name}
            message={lastMessage}
            key={id.toString()}
            sentByOwner={messageAuthorId !== id}
          />
        ))
      )}
    </div>
  );
};

export default UserList;

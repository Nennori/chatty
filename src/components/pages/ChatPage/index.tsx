import React from 'react';
import Avatar from '../../../assets/images/icon_woman.svg';
import Chat from '../../templates/Chat';

const users = [
  { id: 1, name: 'Lola', lastMessage: 'Hey!', avatar: Avatar, messageAuthorId: 1 },
  {
    id: 2,
    name: 'Lupa',
    lastMessage: 'Hello, What"s with my salary?',
    avatar: Avatar,
    messageAuthorId: 2,
  },
  {
    id: 3,
    name: 'Pupa',
    lastMessage:
      'I"m sorry, I confused your salaries with a Lupa. Lupa got it for you, and you got for Lupa.',
    avatar: Avatar,
    messageAuthorId: 5,
  },
];

const user = {
  id: 3,
  messages: [
    {
      id: 1,
      authorId: 3,
      content: 'Hello, What"s with my salary?',
    },
    {
      id: 2,
      authorId: 5,
      content:
        // eslint-disable-next-line max-len
        'I"m sorry, I confused your salaries with a Lupa. Lupa got it for you, and you got for Lupa.',
    },
    {
      id: 3,
      authorId: 5,
      content:
        // eslint-disable-next-line max-len
        'I"m sorry, I confused your salaries with a Lupa. Lupa got it for you, and you got for Lupa.',
    },
  ],
};

const ChatPage: React.FC = () => {
  return <Chat users={users} user={user} />;
};

export default ChatPage;

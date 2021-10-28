import React from 'react';
import MainPanel from '../../organisms/MainPanel';
import MessagePanel from '../../organisms/MessagePanel';
import UserList from '../../organisms/UserList';

interface ChatProps {
  user: {
    id: number;
    messages: {
      id: number;
      authorId: number;
      content: string;
    }[];
  } | null;
  users:
    | {
        id: number;
        name: string;
        lastMessage: string;
        avatar: string;
        messageAuthorId: number;
      }[]
    | null;
}

const Chat: React.FC<ChatProps> = ({ user, users }: ChatProps) => {
  return (
    <main className="chat">
      <MainPanel
        onClick={() => {
          return undefined;
        }}
      />
      <div className="chat__area">
        <UserList users={users} />
        <MessagePanel user={user} />
      </div>
    </main>
  );
};

export default Chat;

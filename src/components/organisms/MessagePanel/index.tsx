import React from 'react';
import Message from '../../atoms/Message';
import WritePanel from '../../molecules/WritePanel';

interface MessagePanelProps {
  user: {
    id: number;
    messages: {
      id: number;
      authorId: number;
      content: string;
    }[];
  } | null;
  isEmpty?: boolean;
}

const MessagePanel: React.FC<MessagePanelProps> = ({
  user = null,
  isEmpty = false,
}: MessagePanelProps) => {
  if (isEmpty) {
    return <div className="message-panel" />;
  }
  return (
    <div className="message-panel">
      <div className="message-panel__chat">
        {user == null ? (
          <p className="message-panel__info">Select a chat to start messaging</p>
        ) : (
          user.messages.map(({ id, authorId, content }) => (
            <Message key={id.toString()} sentByOwner={user.id !== authorId}>
              {content}
            </Message>
          ))
        )}
      </div>
      {user !== null ? <WritePanel /> : ''}
    </div>
  );
};

export default MessagePanel;

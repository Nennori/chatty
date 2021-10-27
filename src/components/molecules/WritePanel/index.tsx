import React from 'react';
import Send from '../../../assets/images/send_icon.png';
import AddFile from '../../../assets/images/add_file_icon.png';

const WritePanel: React.FC = () => {
  return (
    <div className="write-panel">
      <form className="write-panel__form">
        <div className="write-panel__add">
          <input type="file" name="file" />
          <img src={AddFile} alt="add file" />
        </div>
        <textarea
          className="write-panel__message"
          name="message"
          placeholder="Write something..."
          wrap="soft"
        />
        <button className="write-panel__send" type="submit">
          <img src={Send} alt="send" />
        </button>
      </form>
    </div>
  );
};

export default WritePanel;

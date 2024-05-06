import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 item-center shadow-sm mx-2 my-4">
      <div>
        <img
          className="h-6"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
      <h1 className="font-bold pr-2">{name}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;

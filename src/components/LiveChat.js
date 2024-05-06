import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const messages = useSelector((store) => store.chat?.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full p-2 ml-2 border border-black">
      <div className="w-full h-[450px] overflow-y-scroll flex flex-col-reverse">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message?.name}
            message={message?.message}
          />
        ))}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="w-full border-black flex gap-3">
          <input
            className="w-[70%] p-2 rounded-lg"
            type="text"
            value={liveMessage}
            placeholder="message"
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button
            className="border border-gray-500 px-5 rounded-lg bg-gray-100"
            onClick={() => {
              dispatch(
                addMessage({
                  name: "Akash",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;

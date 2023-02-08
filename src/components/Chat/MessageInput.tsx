import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { submitters } from "../../services/seeds";
import { addMessage } from "../../store/chatSlice";

const MessageInput = () => {
  const messages = useAppSelector((state) => state.chat.messages);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const handleClick = () => {
    const user = submitters[Math.floor(Math.random() * submitters.length)];
    dispatch(
      addMessage({
        id: messages.length + 1,
        author: {
          name: user.name,
          avatar: `images/avatars/${user.image}`,
        },
        text: value,
        date: Date.now(),
      })
    );
    setValue("");
  };

  return (
    <div className="ui reply form">
      <div className="field">
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <button
        className="ui blue labeled submit icon button"
        onClick={handleClick}>
        <i className="icon edit" />
        Add Replay
      </button>
    </div>
  );
};

export default MessageInput;

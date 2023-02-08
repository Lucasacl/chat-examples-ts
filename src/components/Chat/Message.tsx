import { Message as MessageModal } from "../../models/chat";
import { useAppDispatch } from "../../hooks";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
type Props = {
  message: MessageModal;
  index: number;
};

const Message: React.FC<Props> = ({ index, message }) => {
  dayjs.extend(relativeTime);
  const dispatch = useAppDispatch();

  const handleRemoveMessage = (index: number) => {
    //TODO TRABALHO DE CASA
  };
  return (
    <div className="comment">
      <span className="avatar">
        <img src={message.author.avatar} />
      </span>
      <div className="content">
        <span className="author">{message.author.name}</span>
        <div className="metadata">
          <span className="data">{dayjs(message.date).fromNow()}</span>
        </div>
        <div className="text">{message.text}</div>
        <div className="text">
          <a
            href="#"
            className="reply"
            onClick={() => handleRemoveMessage(index)}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default Message;

import { useParams } from "react-router-dom";

const MessageHead = () => {
    const {name} = useParams();

    return (
        <div className="message-head">
        <h2>Message Head - {name}</h2>
        </div>
    );
}

export default MessageHead;
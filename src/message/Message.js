import './Message.css'

function Message({ content }) {
  const type = content[0];
  const text = content[1];
  const time = content[2];


   // case it is current user send text message
   if (type == 0) {
    return (
      <div className='my-msg'>
        <p className='text-msg'>{text}</p>
        <div>
          <p className='time-msg'>{time}</p>
        </div>
      </div>
    );
  } else {
     //case it is a reply message
    return (
      <div className="reply-div">
        <div className='reply-msg'>
          <p className='text-msg'>{text}</p>
          <div>
            <p className='time-msg'>{time}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
import './Message.css'

function Message({ content }) {
  const text = content[0];
  const time = content[1];

  return (
    <div className='my-msg'>
      <p className='text-msg'>{text}</p>
      <div>
        <p className='time-msg'>{time}</p>
      </div>
    </div>
  );
}
export default Message;
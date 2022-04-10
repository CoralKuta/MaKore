import './Message.css'

function Message({ content }) {
  const type = content[0];
  const text = content[1];
  const time = content[2];
  if (type == 0) {
    return (
      <div className='my-msg'>
        <p className='text-msg'>{text}</p>
        <div>
          <p className='time-msg'>{time}</p>
        </div>
      </div>
    );
  }
  if (type == 1) {
    return (
      <div className='my-msg'>
        <img className='img-msg' src={text}></img>
        <div>
          <p className='time-msg'>{time}</p>
        </div>

      </div>
    );
  }
  if (type == 2) {
    return (
      <div className='my-msg'>
        <video className='video-msg' src={text} controls></video>
        <div>
          <p className='time-msg'>{time}</p>
        </div>

      </div>
    );
  }
}
export default Message;
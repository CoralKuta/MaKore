import './Message.css'

function Message({ content }) {
  const type = content[0];
  const text = content[1];
  const time = content[2];


  // case the user send text message
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
  // case the user send image
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
  // case the user send video
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
  // case the user send audio

  if (type == 3) {
    return (
      <div className='my-msg'>
        <audio className='audio-msg' src={text} controls></audio>
        <div>
          <p className='time-msg'>{time}</p>
        </div>

      </div>
    );
  }
  //case its the auto message
  if (type == 4) {
    return (
      <div className="reply-div">
        <div className='reply-msg'>
          <p className='text-msg'>{text}</p>
          <div>
            <p className='time-msg'>{time}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Message;
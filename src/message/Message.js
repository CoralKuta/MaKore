import './Message.css'
function Message({content}) {
  return (
      <p className='my-msg'>{content}</p>
  );
}

export default Message;
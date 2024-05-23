import './Input.css';

function Input({ sendText, name="" }) {
  return <input placeholder={sendText} name={name}/>;
}

export default Input;
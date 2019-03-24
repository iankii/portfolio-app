import React from 'react';

const button = (props) => {
  return (
    <button className="send-button" onClick={props.onclick}>Send</button>
  )
}

export default button;
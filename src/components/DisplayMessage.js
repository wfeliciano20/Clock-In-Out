import React from 'react'

const DisplayMessage = ({type,message}) => {
  let messageType;
  if(type === 'error'){
    messageType = 'bg-red-200';
  }else if (type === 'message'){
    messageType = 'bg-green-200';
  }
  console.log('DisplayMessage messsage: ' + message);
  return (
    <div className="bg-green-400 text-white text-2xl w-auto h-auto">
      <h1>{'Hello'}</h1>
    </div>
  )
}

export default DisplayMessage

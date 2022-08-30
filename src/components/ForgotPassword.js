import React,{ useState, useEffect } from 'react';
import Navbar from './Navbar';
import {useAuth} from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth();
  const history = useHistory();
  const [show,setShow] = useState(false);
  const [isError,setIsError] = useState(false);
  const [message,setMessage] = useState("");
  let messageColor;
  let backgroundColor;

  if(isError) {
    messageColor = 'text-red-500';
    backgroundColor = 'bg-red-500';
  }else{
    messageColor = 'text-green-400';
    backgroundColor = 'bg-green-400';
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const onSubmit = () => {
    forgotPassword(email)
      .then(response => {
        toggle();
        setMessage('Email sent successfully');
        // alert('Email sent successfully');
        setTimeout(() => history.push('/login'),5000)
        
        })
      .catch(err => {
        toggle();
        setIsError(true);
        setMessage(err.message);
        setTimeout(() => toggle(),5000);
        // alert(err.message);
      });
  };

  const toggle = () => {
    if(show){
      setShow(false);
    }else{
      setShow(true);
    }
    return show;
  }

  

  return (
    <div>
      <Navbar />
      <div className = "w-full h-screen bg-grey-900 flex flex-col justify-center items-center" >
        <div className = "m-5 pb-10" >
            <Alert className = {`${messageColor} text-3xl`} show={() => toggle()}  onClose={()=>setShow(false)} variant={'info'} >
              {message}
            </Alert>
          </div>
        <div className = "w-96 bg-white h-90 shadow-2xl rounded" >
          <div className = "m-5" >
            <h1 className="text-3xl font-bold">
              Forgot your password
            </h1>
          </div>
          <div className = "m-5" >
            <label className = "block text-xl font-bold mb-2" > Please enter your Email: </label> 
            <input value = { email }
            onChange = { handleEmail }
            name = "email"
            type = "email"
            className = "border-grey-200 border-2 rounded w-full p-2 h-10" 
            />
          </div> 
          <div className = "m-5" >
            <button 
              onClick = { onSubmit }
              className = "text-red-600 border-solid border-red-600 border-2 px-10 py-1 rounded-lg  text-lg front-bold w-full rounded mt-5" 
              > Submit
            </button> 
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

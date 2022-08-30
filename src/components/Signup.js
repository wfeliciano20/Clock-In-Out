import { updateProfile } from '@firebase/auth';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import useMounted from '../hooks/useMounted';
import Navbar from './Navbar';

export const Signup = ({history}) => {


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmedPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();


  const mounted = useMounted();

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmedPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const onSignup = () => {
    let passwordMatch = password === confirmedPassword;
    if(name && email && password && confirmedPassword && passwordMatch) {
      setLoading(true);
      register(email,password)
        .then((response) => {updateProfile(response.user, {displayName: name});console.log(response);})
        .catch((error) => {alert(error.message);})
        .finally(() => mounted.current && setLoading(false));
    }else{
      alert('Please enter all the fields');
    }
    
    
    
  }
  return (
    <div>

        <Navbar />
      <div className="w-full h-screen bg-grey-900 flex justify-center items-center">
        <div className="w-96 bg-white h-90 shadow-2xl rounded">
            <div className="m-5">
              <label className="block text-xl font-bold mb-2">Full-Name</label>
              <input 
              value={name}
              onChange={handleName}
              name="name" 
              type="text" 
              className="border-grey-200 border-2 rounded w-full p-2 h-10"
              />
          </div>
          <div className="m-5">
            <label className="block text-xl font-bold mb-2">Email</label>
            <input
            value={email}
            onChange={handleEmail}
            name="email" 
            type="email" 
            className="border-grey-200 border-2 rounded w-full p-2 h-10"
            />
          </div>
          <div className="m-5">
            <label className="block text-xl font-bold mb-2">Password</label>
            <input 
            value={password}
            onChange={handlePassword}
            name="password" 
            type="password" 
            className="border-grey-200 border-2 rounded w-full p-2 h-10"
            />
          </div>
          <div className="m-5">
            <label className="block text-xl font-bold mb-2">Re-enter Password</label>
            <input 
            value={confirmedPassword}
            onChange={handleConfirmedPassword}
            name="confirmedPassword" 
            type="password" 
            className="border-grey-200 border-2 rounded w-full p-2 h-10"
            />
          </div>
          <div className="m-5">
            <button
            onClick={onSignup} 
            className="text-white bg-blue-600 px-10 py-2 text-xl front-bold w-full rounded">
              {loading ? 'Creating User...': 'Sign Up'}
            </button>
          </div>
          <div className="m-5">
            <Link to="/">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

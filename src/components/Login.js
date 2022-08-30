import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import useMounted from '../hooks/useMounted';
import Navbar from './Navbar';
import {useRegister} from '../contexts/RegisterContext';

export const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { login, signInWithGoogle } = useAuth();
    const location = useLocation();
    const mounted = useMounted();
    const {logUserData} = useRegister();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    let whereToRedirect;
    if(location.state === undefined) {
      whereToRedirect ='/dashboard';
    }
    else if (location.state === null) {
      whereToRedirect ='/dashboard';
    } else {
      whereToRedirect = location.state.from;
    }

    const onSignIn = () => {

        if (email && password) {
            setLoading(true);
            login(email, password)
                .then((response) => {
                    //console.log(response);
                    logUserData(response.user);
                    history.push(whereToRedirect);
                })
                .catch((error) => { alert(error.message); })
                // only set the state if the component is mounted
                .finally(() => mounted.current && setLoading(false));
        } else {
            alert('Please enter all the fields');
        }
    }

    const onSignInWithGoogle = () => {
        signInWithGoogle()
            .then((user) => {
                //console.log(user);
                logUserData(user);
                history.push(whereToRedirect);
            })
            .catch((error) => { alert(error.message); })
            .finally(() => mounted.current && setLoading(false));
    }

    return (
        //How to use a gradient
        // bg-gradient-to-t from-yellow-200 via-red-500 to-pink-500
        <div>
          <Navbar />
          <div className = "w-full h-screen bg-grey-900 flex justify-center items-center" >
            <div className = "w-96 bg-white h-90 shadow-2xl rounded" >
              <div className = "m-5" >
                <label className = "block text-xl font-bold mb-2" > Email </label> 
                <input value = { email }
                onChange = { handleEmail }
                name = "email"
                type = "email"
                className = "border-grey-200 border-2 rounded w-full p-2 h-10" 
                />
              </div> 
              <div className="m-5">
                <label className = "block text-xl font-bold mb-2"> Password </label> 
                <input value = { password }
                onChange = { handlePassword }
                name = "password"
                type = "password"
                className = "border-grey-200 border-2 rounded w-full p-2 h-10" 
                />
              </div> 
              <div className = "m-5" >
                <button onClick = { onSignIn }
                className = "text-white bg-blue-600 px-10 py-2 text-xl front-bold w-full rounded" > { loading ? `Loging In...` : `Log In` } 
                </button> 
              </div>
              <div className = "m-5" >
                <button onClick = { onSignInWithGoogle }
                className = "text-red-600 border-solid border-red-600 border-2 px-10 py-1 rounded-lg  text-lg front-bold w-full rounded mt-5" > { loading ? `Loging In...` : `Log In with Google` } 
                </button> 
              </div> 
              <div className = "m-5 flex justify-between" >
                <Link to ="/signup">
                Don't have an account? 
                </Link> 
                <Link to = '/forgotPassword'>
                  Forgot your password? 
                </Link>
              </div> 
            </div> 
          </div> 
        </div>
    );
};
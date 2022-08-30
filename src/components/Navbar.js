import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import {useRegister} from '../contexts/RegisterContext';

const Navbar = () => {
  const {currentUser, logout} = useAuth(); 
  const {unlogUserData} = useRegister();
  const history = useHistory();
  const handleLogOut = () => {
    unlogUserData();
    logout();
    history.push('/');
  }
  return (
      <div className="navbar flex flex-row bg-gray-200 justify-between w-full h-auto p-2">
        <div className="logo font-bold text-2xl text-blue-300">
          <NavLink className="m-2 text-blue-300" to='/' name='Clock-In-Out'>
            Clock-In-Out</NavLink>
        </div>
        <div className="links">
          
          { !currentUser && <NavLink className="m-2 text-blue-300 text-bold text-xl" to='/login' name='Log In' activeStyle={
            {color:'purple'}}>
            Log In</NavLink>}
          {!currentUser && <NavLink className="m-2 text-blue-300 text-bold text-xl " to='/signup' name='Sign Up' activeStyle={
            {color:'purple'}}>Sign Up</NavLink>}
          {currentUser && <NavLink className="m-2 text-blue-300 text-bold text-xl " to='/dashboard' name='Dashboard' activeStyle={
            {color:'purple'}}>Dashboard</NavLink>}
          {currentUser && <NavLink className="m-2 text-blue-300 text-bold text-xl " to='/enterclockinout' name='Enter Clock-In-Out' activeStyle={
            {color:'purple'}}>Enter Clock-In-Out</NavLink>}
          { currentUser &&  <button
            className="border-solid border-blue-300 border border-black px-10 py-1 rounded-lg text-bold text-xl text-blue-300 bg-white "
            onClick={handleLogOut}>logout</button>
          }
        </div>
      </div>
  )
}

export default Navbar

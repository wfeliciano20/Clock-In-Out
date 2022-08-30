import React,{useState} from 'react';
import { useAuth } from '../contexts/AuthContext';
//import {  useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import {useRegister} from '../contexts/RegisterContext';
import Modal from './Modal';


export const Dashboard = () => {
  const {currentUser} = useAuth();

  // const history = useHistory();
  const {records,deleteRecord} = useRegister();
  
  const [openModal,setOpenModal] = useState(false);
  const [idForModal,setIdForModal] = useState('');

  const handleEdit = (id) => {
    setOpenModal(true);
    setIdForModal(id);
    console.log('edit');
  }


  const handleDelete = (id) => {
    deleteRecord(id);

  }

  const handleCloseModal = () =>  {
    setOpenModal(false);
  }

  const sortedRecords = records.sort((a, b) => a.Date - b.Date);


  return (
    <div className="bg-white"> 
      {openModal && <Modal id={idForModal} closeModal={handleCloseModal} />}
      <div>
        <Navbar />
      </div>
      {/* <h1 className="pt-10">{JSON.stringify(currentUser,null,2)}</h1> */}
      <div className="h-auto flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-6xl text-blue-400 mt-10 mb-10">Hours Register</h1>
        <div className="">       
          <table className="mb-10 overflow-x:auto">
            <thead >
              <tr>
                <th colSpan="1" className="border-black border-2 bg-blue-400 text-white p-5" >Date</th>
                <th colSpan="1" className="border-black border-2 bg-blue-400 text-white p-5" >Clock In</th>
                <th colSpan="1" className="border-black border-2 bg-blue-400 text-white p-5" >Clock Out</th>
                <th colSpan="1" className="border-black border-2 bg-blue-400 text-white p-5" >Week Hours Left</th>
                <th colSpan="1" className="border-black border-2 bg-blue-400 text-white p-5" >Edit</th>
                <th colSpan="1" className="border-black border-2 bg-blue-400 text-white p-5" >Delete</th>
              </tr>
            </thead>
            <tbody>
            
            {sortedRecords.map((record,i) => 
              <tr key={record.id}>
                <td className={i%2 !== 0 ? 'border-black border-2 p-5 bg-blue-100': 'border-black border-2 p-5 bg-white]' } >{`${record.Date}`}</td>
                <td className={i%2 !== 0 ? 'border-black border-2 p-5 bg-blue-100': 'border-black border-2 p-5 bg-white' } >{record.ClockInMinutes < 10 ? `${record.ClockInHour}:0${record.ClockInMinutes}${record.InTimeOfDay}` : `${record.ClockInHour}:${record.ClockInMinutes}${record.InTimeOfDay}`}</td>
                <td className={i%2 !== 0 ? 'border-black border-2 p-5 bg-blue-100': 'border-black border-2 p-5 bg-white' } >{record.ClockOutMin < 10 ? `${record.ClockOutHour}:0${record.ClockOutMin}${record.OutTimeOfDay}`: `${record.ClockOutHour}:${record.ClockOutMin}${record.OutTimeOfDay}`}</td>
                <td className={i%2 !== 0 ? 'border-black border-2 p-5 bg-blue-100': 'border-black border-2 p-5 bg-white' } >{ record.WeekMinutes < 10 ? `${record.WeekHours}:${record.WeekMinutes}0` : `${record.WeekHours}:${record.WeekMinutes}` }</td>
                <td className={i%2 !== 0 ? 'border-black border-2 p-5 bg-blue-100': 'border-black border-2 p-5 bg-white' } ><button className="text-blue-400" onClick={handleEdit.bind(this,record.id)}>Edit</button></td>
                <td className={i%2 !== 0 ? 'border-black border-2 p-5 bg-blue-100': 'border-black border-2 p-5 bg-white' } ><button className="text-red-400" onClick={handleDelete.bind(this,record.id)}>Delete</button></td>
              </tr>)
            }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

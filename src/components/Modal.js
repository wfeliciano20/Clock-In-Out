import React,{useState} from 'react';
import {useRegister} from '../contexts/RegisterContext';
import ClockInInput from './ClockInInput';
import ClockOutInput from './ClockOutInput';
import WeekHoursInput from './WeekHoursInput';
import DateInput from './DateInput';
import {useHistory} from 'react-router-dom';

const Modal = ({id, closeModal}) => {
  const [whatToEdit, setWhatToEdit] = useState('ClockIn');
  const [editClockIn, setEditClockIn] = useState(true);
  const [editClockOut, setEditClockOut] = useState(false);
  const [editWeekHours, setEditWeekHours] = useState(false);
  const [editDate, setEditDate] = useState(false);
  const [inHour, setInHour] = useState('11');
  const [inMinutes,setInMinutes] = useState('30');
  const [inTimeOfDay,setInTimeOfDay] = useState('AM');
  const [outHour, setOutHour] = useState('4');
  const [outMinutes,setOutMinutes] = useState('30');
  const [outTimeOfDay,setOutTimeOfDay] = useState('PM');
  const [weekHours, setWeekHours] = useState('25');
  const [weekMinutes,setWeekMinutes] = useState('0');
  const [year,setYear] =  useState('2021');
  const [month,setMonth] = useState('1');
  const [day,setDay] = useState('1');
  const history = useHistory();

  const {updateRecordDate,
    updateRecordClockIn,
    updateRecordClockOut,
    updateRecordWeekHours,
  } = useRegister();

  const handleOnChange = e => {
    setWhatToEdit(e.target.value);
    switch (e.target.value) {
    case 'ClockIn':
        setEditClockIn(true);
        setEditClockOut(false);
        setEditWeekHours(false);
        setEditDate(false);
        break;
    case 'ClockOut':
        setEditClockIn(false);
        setEditClockOut(true);
        setEditWeekHours(false);
        setEditDate(false);
        break;
    case 'WeekHours':
        setEditClockIn(false);
        setEditClockOut(false);
        setEditWeekHours(true);
        setEditDate(false);
        break;
    case 'Date':
        setEditClockIn(false);
        setEditClockOut(false);
        setEditWeekHours(false);
        setEditDate(true);
        break;

    default:
      // setEditClockIn(true);
      // setEditClockOut(false);
      // setEditWeekHours(false);
      // setEditDate(false);
      break;
  }
  }

  const handleEdit = () => {

    if(whatToEdit === 'ClockIn'){
      updateRecordClockIn(id,inHour,inMinutes,inTimeOfDay);
    

    }else if(whatToEdit === 'ClockOut'){
      updateRecordClockOut(id, outHour, outMinutes, outTimeOfDay);
    

    }else if(whatToEdit === 'WeekHours'){
      updateRecordWeekHours(id,weekHours,weekMinutes);
      

    }else if(whatToEdit === 'Date'){
      const date = `${month}/${day}/${year}`
      updateRecordDate(id,date);
    
    }else{
      return
    }
    history.push('/dashboard');
    closeModal();
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center backdrop-opacity-1">
      <div className="modal-container m-5 w-[36rem] h-[28rem] bg-white shadow-2xl p-6">
        <div className="flex justify-end">
          <button className="text-red-600 text-bold text-4xl" onClick={() => closeModal()}>X</button>
        </div>
        
        <div className="title">
          <h1 className="text-bold text-xl">Edit Record</h1>
        </div>
        <div className="body w-96">
          <div className="flex flex-col">
            <label className="text-bold" >Choose which part of the record you want to edit</label>
            <select value={whatToEdit} onChange={handleOnChange} name="chooseWhatToEdit" className="border-2 border-grey-600">
              <option value="ClockIn">Clock In</option>
              <option value="ClockOut">Clock Out</option>
              <option value="WeekHours">Week Hours</option>
              <option value="Date">Date</option>
            </select>
          </div>
          <div className = "">
            {editClockIn && <ClockInInput onInHour={setInHour} onInMinutes={setInMinutes} onInTimeOfDay={setInTimeOfDay}/>}   
          </div> {/* m-5 */}

          <div className = ""> {/* w-96*/}
            {editClockOut && <ClockOutInput onOutHour={setOutHour} onOutMinutes={setOutMinutes} onOutTimeOfDay={setOutTimeOfDay} />}
          </div> 

          <div className = "">
            {editWeekHours && <WeekHoursInput onWeekHours={setWeekHours} onWeekMinutes={setWeekMinutes}/>}
          </div> 

          <div className = "" >
            {editDate && <DateInput onMonth={setMonth} onDay={setDay} onYear={setYear} />}
          </div>
        </div>{/* body */}

        <div className="footer">
          <button onClick = { handleEdit }
          className = "text-blue-600 border-solid border-blue-600 border-2 px-10 py-1 rounded-lg  text-lg front-bold w-full rounded mt-5" > { `Edit` } 
          </button> 
          <button onClick = { () => {closeModal()} }
          className = "text-red-600 border-solid border-red-600 border-2 px-10 py-1 rounded-lg  text-lg front-bold w-full rounded mt-5" > { `Cancel` } 
          </button> 
        </div>
      </div>
    </div>
  )
}

export default Modal

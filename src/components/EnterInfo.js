import React,{ useState} from 'react';
import Navbar from './Navbar';
import {useRegister} from '../contexts/RegisterContext';
import { useHistory } from 'react-router-dom';
import ClockInInput from './ClockInInput';
import ClockOutInput from './ClockOutInput';
import WeekHoursInput from './WeekHoursInput';
import DateInput from './DateInput';

const EnterInfo = () => {
  const [inHour, setInHour] = useState('11');
  const [inMinutes,setInMinutes] = useState('30');
  const [inTimeOfDay,setInTimeOfDay] = useState('AM');
  const [outHour, setOutHour] = useState('4');
  const [outMinutes,setOutMinutes] = useState('30');
  const [outTimeOfDay,setOutTimeOfDay] = useState('PM');
  const [weekHours, setWeekHours] = useState('25');
  const [weekMinutes,setWeekMinutes] = useState('0');
  const [year,setYear] =  useState('2022');
  const [month,setMonth] = useState('1');
  const [day,setDay] = useState('1');
  const history = useHistory();


  const {createRecord} = useRegister();

  const handleClockInOut = () => {
    // const newRecord = new ClockInOut(parseInt(inHour),parseInt(inMinutes),parseInt(outHour),parseInt(outMinutes),parseInt(weekHours),parseInt(weekMinutes),year,day,month);
    const inH= parseInt(inHour);
    const inM= parseInt(inMinutes);
    const outH= parseInt(outHour);
    const outM= parseInt(outMinutes);
    const weekH = parseInt(weekHours);
    const weekM = parseInt(weekMinutes);
    const d = `${month}/${day}/${year}`
    createRecord(inH,inM,inTimeOfDay,outH,outM, outTimeOfDay,weekH,weekM,d);
    history.push('/dashboard');
  }

  // const dateHandler = (e) => {
  //   setDate(e.target.value);
  //   const [selectedYear, selectedMonth, selectedDay] = date.split('-');
  //   setYear(parseInt(selectedYear));
  //   setMonth(parseInt(selectedMonth));
  //   setDay(parseInt(selectedDay));
  //   console.log(`${month}/${day}/${year}`);
  // }

  return (
    <div>
      <Navbar />
      <div className = "w-full h-screen bg-grey-900 flex justify-center items-center" >
            <div className = "bg-white h-auto shadow-2xl w-[28rem]rounded" >
              <div className = "m-5">
                <ClockInInput onInHour={setInHour} onInMinutes={setInMinutes} onInTimeOfDay={setInTimeOfDay} />
              </div>
                
              <div className = "m-5 w-96"> {/* w-96*/}
                <ClockOutInput onOutHour={setOutHour} onOutMinutes={setOutMinutes} onOutTime={setOutTimeOfDay} />
              </div> 

              <div className = "m-5">
                <WeekHoursInput onWeekHours={setWeekHours} onWeekMinutes={setWeekMinutes} />
              </div> 

              <div className = "m-5" >
                <DateInput onMonth={setMonth} onDay={setDay} onYear={setYear} />
              </div>
              
              <div className = "m-5" >
                <button onClick = { handleClockInOut }
                className = "text-blue-600 border-solid border-blue-600 border-2 px-10 py-1 rounded-lg  text-lg front-bold w-full rounded mt-5" > { `Register Clock-In-Out` } 
                </button> 
              </div> 
            </div> 
          </div> 
    </div>
  )
}

export default EnterInfo

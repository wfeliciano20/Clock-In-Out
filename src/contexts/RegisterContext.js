import {createContext, useContext, useEffect, useState} from 'react';
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
    where,
    limit,
} from "firebase/firestore";
import {onAuthStateChanged} from "firebase/auth";
import db from '../firebase-config';
import { auth } from '../firebase-config';




const RegisterContext = createContext({
  records: [],
  mapIdToDate: [],
  user:{},
  createRecord: async () => {},
  updateRecordDate: async () => {},
  updateRecordClockIn: async () => {},
  updateRecordClockOut: async () => {},
  updateRecordWeekHours: async () => {},
  deleteRecord: async () => {},
  logUserData: () => {},
  unlogUserData: () => {},

});

export const useRegister = () => useContext(RegisterContext);


export default function RegisterContextProvider({children}){
  const [records, setRecords] = useState([]);
  const [mapIdToDate, setMapIdToDate] = useState([]);
  const [user,setUser] = useState({uid:'123'});

  const registerCollectionRef = collection(db,'hourRegister');

  // useEffect(() => {
  //   const getRecords = async() => {
  //     const data = await getDocs(registerCollectionRef);
  //     setRecords(data.docs.map(doc => ({id: doc.id, ...doc.data()})));
  //   };
  //   return getRecords();
  // },[]);

  useEffect(() => {
      try {
        if(auth.currentUser !== null){
          const unsubscribe1= onAuthStateChanged(auth,user =>{
          setUser(user);
          if(user !== null){
            try {
              const unsubscribe2 = onSnapshot(query(registerCollectionRef,where('uid','==',auth.currentUser.uid === null ? '123' : auth.currentUser.uid), orderBy('Timestamp','desc'), limit(14)), 
              snapShot => setRecords(snapShot.docs.map(doc => ({id: doc.id, ...doc.data()}))));

              return () => unsubscribe2();
            } catch (error) {
              console.log('no user with 123 id');
            }
            
          }
          
      });

        return () => unsubscribe1();
      }
      } catch (error) {
        console.error(error.message);
      }

    
  },[auth.currentUser]);

  const createRecord = async (inHour,inMinutes,inTimeOfDay,outHour,outMinutes,outTimeOfDay,weekHours,weekMinutes,date) => {
    try {
      if(auth.currentUser !== null){
        const docRef = await addDoc(registerCollectionRef, {ClockInHour: inHour, ClockInMinutes: inMinutes,InTimeOfDay: inTimeOfDay ,ClockOutHour: outHour, ClockOutMin: outMinutes,OutTimeOfDay: outTimeOfDay, WeekHours: weekHours, WeekMinutes: weekMinutes, Date: date, Timestamp: serverTimestamp(), uid: auth.currentUser.uid});
        setMapIdToDate( [{ date: date, id: docRef.id}]);
      }
    } catch (error) {
      alert(error.message)
    }
    
  }

  const updateRecordDate = async (id, date ) => {
    const registerDoc = doc(db,'hourRegister',id);
    const newDate = { Date: date};
    try {
      await updateDoc(registerDoc,newDate);
    } catch (error) {
      alert(error.message);
    }
    
  }

  const updateRecordClockIn = async (id, newInHour, newInMinutes, newInTimeOfDay) => {
    const registerDoc = doc(db,'hourRegister',id);
    const newClockIn = { ClockInHour: newInHour, ClockInMinutes: newInMinutes, InTimeOfDay: newInTimeOfDay};
    try {
      await updateDoc(registerDoc, newClockIn);
    } catch (error) {
      alert(error.message)
    }
  }

  const updateRecordClockOut = async ( id, newOutHour, newOutMinutes, newOutTimeOfDay) => {
    const registerDoc = doc(db,'hourRegister',id);
    const newClockOut = { ClockOutHour: newOutHour, ClockOutMin: newOutMinutes, OutTimeOfDay: newOutTimeOfDay };
    try {
      await updateDoc(registerDoc, newClockOut);
    } catch (error) {
      console.log(`error updating clock out ${error.message}`);
      alert(error.message)
    }
    
  }

  const updateRecordWeekHours = async (id, newWeekHour, newWeekMinutes) => {
    const registerDoc = doc(db,'hourRegister',id);
    const newWeekHours = { WeekHours: newWeekHour, WeekMinutes: newWeekMinutes };
    try {
      await updateDoc(registerDoc,newWeekHours);
    } catch (error) {
      alert(error.message)
    }
    
  }

  const deleteRecord = async(id) => {
    const registerDoc = doc(db,'hourRegister',id);
    try {
      await deleteDoc(registerDoc);
    } catch (error) {
      alert(error.message);
    }
    
  }

  const logUserData = (user) => {
    setUser(user);
  }

  const unlogUserData = () => {
    setUser({uid: '123'});
  }

  
  const value = {
    records,
    mapIdToDate,
    createRecord,
    updateRecordDate,
    updateRecordClockIn,
    updateRecordClockOut,
    updateRecordWeekHours,
    deleteRecord,
    logUserData,
    unlogUserData,
  }

  return <RegisterContext.Provider value={value}>
    {children}
  </RegisterContext.Provider>
}
import React,{useState,useEffect} from "react";
// import { useHistory } from "react-router-dom";
import '../components/addFile.css';
import userIcon from '../components/images/user.PNG';
import lock from '../components/images/lock.PNG';
import { db, storage } from '../components/config/firebase.js'
import { addDoc, collection, onSnapshot ,getDocs} from 'firebase/firestore';

function AddFile(){

    const [id,setID] = useState('');
    const [fullNames,setFullName]= useState('');
    const [phoneNumber,setPhoneNumber]= useState('');
    const [physicalAddress,setPhysicalAddress]= useState('');
    const [nextOfKin,setNextOfKin]= useState('');
    // const history = useHistory()

    const addPatientRef = collection(db,'patients')
    const [patients,setPatients] = useState([])
    let today = new Date();
    const [notes,setNotes]=useState("");
    const [condition,setCondition]=useState("");
    const collectionRef = collection(db,'patients');
    

const AddPatient = () =>{

    const Patient ={
        idno:id,
        fullName:fullNames,
        phoneNumber:phoneNumber,
        physicalAddress:physicalAddress,
        nextOfKin:nextOfKin,
        notes:notes,
        condition:condition,
        date:today.toString().substring(0,15)
    };

    addDoc(addPatientRef,Patient).then(()=>{
        console.log('patient added');
        alert("successfully added", {type:'successful'});
        // history.push('/admin')
    }).catch((err)=> {
        console.log(err);
        alert('Something went wrong', {type:"error"})
      })

      useEffect(()=> {
        getFile()
      },[])

      const patientRef = collection(db,'patients')

      const getFile = async () =>{
        const data = await getDocs(patientRef)
        console.log(data.docs.map((results) => (results.data())))
        setPatients(data.docs.map((results) => ({ ...results.data(), id: results.id })))

      }

}
  
    
    return(
        <div className="container">
            <div className="sideImageDiv">
                <img src={userIcon} className='userIcon'/>
            </div>
            <div className="formContents">
                <div className="formBox">
                    <img src={lock} className='lockIcon'/><br></br><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setID(e.target.value)} placeholder="Patient ID no"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setFullName(e.target.value)} placeholder="Full Names"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Phone Number"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setPhysicalAddress(e.target.value)} placeholder="Physical Address"/><br></br>
                    <p>Condition: </p>
                    <select style={{width:"80%",height:35,background: "rgba(255, 255, 255, 0.2)",border:"none",borderRadius:5}} placeholder="Condition" onChange={(e)=>setCondition(e.target.value)}>
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                </select>
                    {/* <input type='text' className="textInput" onChange={(e)=>setCondition(e.target.value)} placeholder="Condition"/><br></br> */}
                    <input type='text' className="textInput" onChange={(e)=>setNotes(e.target.value)} placeholder="Notes"/><br></br>
                    {/* <input type='text' className="textInput" onChange={(e)=>setNextOfKin(e.target.value)} placeholder="Next Of Kin"/><br></br> */}
                     <button className="button" onClick={(e)=>{AddPatient()}}>Create File</button>
                </div>

            </div>
        </div>
    )
}

export default AddFile
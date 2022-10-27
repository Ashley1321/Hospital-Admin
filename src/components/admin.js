import '../components/admin.css';
import { Link } from 'react-router-dom';
import admin from '../components/images/admin.png'
import { useEffect, useState } from 'react';
import { addDoc, collection,getDocs} from 'firebase/firestore';
import { db, storage } from '../components/config/firebase.js';
import patientPic from '../components/images/patient.PNG'

function Admin(){


    const [patients,setPatients] = useState([])

    const patientsRef = collection(db,'patients')

    const getPatients = async () => {
        const data = await getDocs(patientsRef)

        console.log(data.docs.map((results) => (results.data())))
        setPatients(data.docs.map((results) => ({ ...results.data(), id: results.id })))
    }

    useEffect(()=> {
        getPatients()
    },[])

    return(
        <div className="container">
            <div className='profileDiv'>
                <div className='imageBorder'>
                 <img src={admin} className='adminIMG'/>
                </div>
                <h3 style={{position:'absolute',top:"30%",left:'41%',color:"white"}}>Admin Name</h3>
            </div>
            <div className='mainContents'>
                <input type='text' placeholder='Search Patient' className='searchBar'/>
                <div className='patientsDiv'>
                    <div className='scroll'>
                    {
                        patients.map((patient,index)=>(
                            <div className='patientInfo' key={index}>
                                <img src={patientPic} className='patientPic'></img>
                                <h3 style={{position:'relative',top:'-95%',left:'-20rem'}}>{patient.fullNames}</h3>
                                <h3 style={{position:'relative',top:'-159%',left:'-5rem'}}>{patient.id}</h3>
                                <h3  style={{position:'relative',top:'-10rem',left:'7rem'}}>{patient.phoneNumber}</h3>
                            </div>
                            
                            
                        ))
                    }
                    </div>
                    </div>
                <div className='myButtons'>
                    <Link to='/addFile' className='buttons'>Create New File</Link>
                    <Link className='logButton'>Log out</Link>
                </div>
            </div>

        </div>
    )
}

export default Admin
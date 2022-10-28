import '../components/admin.css';
import { Link } from 'react-router-dom';
import admin from '../components/images/admin.png'

function Admin(){

    const patientInfo=[
        {
            idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe"

        },
        {
            idno:"002900980219",
            fullName:"Katlego Moila",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Moderate",

        },
        {
            idno:"832900980219",
            fullName:"Joseph Laka",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe"

        },
        {
            idno:"232902340212",
            fullName:"Thapelo Seimela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Moderate"

        },
        {
            idno:"686590980233",
            fullName:"Kagiso Ledwaba",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Mild"

        },
        {
            idno:"012900980344",
            fullName:"John Malebana",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Mild"

        },
        
 
    
    ]
    return(
        <div className="container">
            <div className='profileDiv'>
                <div className='imageBorder'>
                 <img src={admin} className='adminIMG'/>
                </div>
                <h3 style={{position:'absolute',top:"29%",left:'40%',color:"white"}}>Admin Name</h3>
            </div>
            <div className='mainContents'>
                <input type='text' placeholder='Search Patient' className='searchBar'/>
                <div className='patientsDiv'>
                    <div className='scroll'>
                    {
                        patientInfo.map((patient,index)=>(
                            <div className='patientInfo' key={index}>
                                <h2>{patient.fullName}{patient.idno}{patient.condition}</h2>
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
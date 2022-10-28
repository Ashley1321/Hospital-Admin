import lock from '../components/images/admin.png'
import userIcon from '../components/images/user.PNG';
import React,{useState} from "react";
import { Link } from 'react-router-dom';

function Register(){

    const [AdminId,setAdminID] = useState('');
    const [fullName,setFullName]= useState('');
    const [email,setEmail]= useState('');
    const [Password,setPassword]= useState('');


    return(
        <div>
             <div className="container">
            <div className="sideImageDiv">
                <img src={userIcon} className='userIcon'/>
            </div>
            <div className="formContents">
                <div className="formBox">
                    {/* <img src={lock} className='lockIcon'/><br></br><br></br> */}
                    <input type='file' className='profile pic'/>
                    <input type='text' className="textInput" onChange={(e)=>setAdminID(e.target.value)} placeholder="Admin ID no"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setFullName(e.target.value)} placeholder="Full Names"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><br></br>
                    <Link to='/signIn' style={{color:"white",position:"relative",top:'1%'}}>Already Has Account?</Link>
                    <button className="button" placeholder="">Sign Up</button>
                </div>

            </div>
        </div>

        </div>
    )
}

export default Register
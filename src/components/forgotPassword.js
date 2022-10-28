import lock from '../components/images/admin.png'
import userIcon from '../components/images/user.PNG';
import React,{useState} from "react";
import { Link } from 'react-router-dom';

function ResetPassword(){

    const [email,setEmail]= useState('');

    return(
        <div>
             <div>
             <div className="container">
            <div className="sideImageDiv">
                <img src={userIcon} className='userIcon'/>
            </div>
            <div className="formContents">
                <div className="formBox">
                    <img src={lock} className='lockIcon'/><br></br><br></br><br></br><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/><br></br>
                    <Link to='/signIn' style={{color:"white",position:"relative",top:'5%'}}>Already Has Account?</Link>
                    <button className="button" style={{marginTop:"15%"}}>Log In</button>
                </div>

            </div>
        </div>

        </div>

        </div>
    )
}

export  default ResetPassword
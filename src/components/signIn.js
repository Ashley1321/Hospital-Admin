import lock from '../components/images/admin.png'
import userIcon from '../components/images/user.PNG';
import React,{useState} from "react";
import { Link } from 'react-router-dom';

function SignIn(){

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
                    <img src={lock} className='lockIcon'/><br></br><br></br><br></br><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><br></br>
                    <Link to='/registerAccount' style={{color:"white",position:"relative",top:'7%',left:'15%'}}>Don't Have Account?</Link>
                    <Link to='/forgotPassword' style={{color:"white",position:"relative",right:'18%',top:'2%'}}>Forgot Password</Link>
                    <button className="button" style={{marginTop:"15%"}}>Log In</button>
                </div>

            </div>
        </div>

        </div>
    )
}

export default SignIn
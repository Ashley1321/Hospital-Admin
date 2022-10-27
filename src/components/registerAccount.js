import lock from '../components/images/admin.png'
import userIcon from '../components/images/user.PNG';
import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { getDownloadURL, uploadBytesResumable,ref } from 'firebase/storage';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../components/config/firebase.js';
import { async } from '@firebase/util';

function Register(){

    const [AdminId,setAdminID] = useState('');
    const [fullName,setFullName]= useState('');
    const [email,setEmail]= useState('');
    const [Password,setPassword]= useState('');
    const [profile,setProfile] = useState('');


    // const [adminDetails,setAdminDetails] = useState({})


    // const [myForm,setMyform] = useState({
    //     image:''
    // })

    // const handleImage = (e) => {
    //     setMyform({...myForm,image:e.target.files[0]})
    // }

    //   const register= () =>{
    //     const storageRef = ref(storage,`/images/${Date.now()}${myForm.image.name}`);

    //     const uploadImage = uploadBytesResumable(storageRef,myForm.image);

    //     uploadImage.on(
    //         'state_changed',
    //         (snapshot)=> {
    //             const progressPercent = Math.round(
    //                 (snapshot.bytesTransferred/snapshot.totalBytes)*100
    //             );
    //         },
    //         (err)=>{
    //             console.log(err);
    //         },
    //         ()=>{
    //             setMyform({
    //                 image:'',
    //             });
    //             getDownloadURL(uploadImage.snapshot.ref).then((url)=>{
    //                 console.log(url);
    //                 const collectionRef = collection (db,'adminInfo');

    //                 const adminInfo = {
    //                     AdminId:AdminId,
    //                     fullName:fullName,
    //                     image:url
    //                 };
    //                 addDoc(collection,adminInfo).then(()=>{
    //                     alert('succesfuly addded')
                    
    //                 }).catch((err)=>{
    //                     alert('someething went wrong')
    //                 })
    //             })
    //         }
    //     )
        
    //   }
    //   useEffect(()=>{
    //     getAdminInfo()
    //   },[])

    //   const adminRef = collection(db,'adminInfo')

    //   const getAdminInfo = async () => {
    //     const data = await getDocs(adminRef)
    //     console.log(data.docs.map((results) => (results.data())))
    //     setAdminDetails(data.docs.map((results) => ({ ...results.data(), id: results.id })))
    //   }


    return(
        <div>
             <div className="container">
            <div className="sideImageDiv">
                <img src={userIcon} className='userIcon'/>
            </div>
            <div className="formContents">
                <div className="formBox">
                  
                    <img src={lock} className='lockIcon'/><br></br><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setAdminID(e.target.value)} placeholder="Admin ID no"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setFullName(e.target.value)} placeholder="Full Names"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/><br></br>
                    <input type='text' className="textInput" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><br></br>
                    <input type='file' accept='image' placeholder="Password"/><br></br>
                    <Link to='/signIn' style={{color:"white",position:"relative",top:'1%'}}>Already Has Account?</Link>
                    <button className="button" placeholder="">Sign Up</button>
                </div>

            </div>
        </div>

        </div>
    )
}

export default Register
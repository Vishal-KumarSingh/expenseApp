import * as React from 'react';
import Button from '@mui/material/Button';
import { Input, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@mui/icons-material';
import apiCall from '../Network';
export default function Login() {
  const [loginDetails , setLoginDetails] = useState();
  const history = useNavigate() ;
  function Redirect(path){
    history(path);
  }
  const login = ()=>{
      alert("ouch you clicked on login");
      apiCall("login" , loginDetails , (response)=>{
              alert(response);
      })
  }
  return (

  <>
    <div className='flex justify-center'>
    <div style={{marginTop: "20vh"}} className=''>
    <Card className="m-5 mt-[200px] h-full" variant="outlined">
        <h1 className='text-2xl text-center'>Welcome User</h1>
        <div className='m-3'>
    <TextField id="filled-basic" className='w-full' type='email' label="Email" variant="filled" />
    </div>
    <div className='m-3'>
   <TextField id="filled-basic" className='w-full' type="password" label="Password" variant="filled" />
   </div>
   <div className='m-3'>
    <Button variant="contained" className='mt-5 w-full' onClick={()=>{login()}}>Login</Button>
    </div>
    <div className='m-3'> 
    <Button variant="contained" className='m-5 w-full' onClick={()=>{Redirect("register")}}>Register</Button>
    </div>
    <div className='m-3'>
    <Button variant="contained" className='m-5 w-full' onClick={()=>{Redirect("forget")}}>Forgot Yout Password ???</Button>
    </div>
    </Card>
    </div>
    </div>
  </>
  );
}
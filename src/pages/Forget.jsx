import * as React from 'react';
import Button from '@mui/material/Button';
import { Input, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
export default function Forget() {

  const history = useNavigate();
  function Redirect(path){
    history(path);
  }
  return (
  <>
    
    <div style={{marginTop: "20vh"}}>
    <Card className="m-5 mt-[200px] h-full" variant="outlined">
        <h1 className='text-2xl text-center'>Recover Your Password</h1>
        <div className='m-3'>
    <TextField id="filled-basic" className='w-full' type='email' label="Email" variant="filled" />
    </div>
   <div className='m-3'>
    <Button variant="contained" className='mt-5 w-full' >Send the One Time Password</Button>
    </div>
    <div className='m-3'>
    <Button variant="contained" className='m-5 w-full' onClick={()=>{Redirect("/register")}}>Register</Button>
    </div>
    <div className='m-3'>
    <Button variant="contained" className='m-5 w-full' onClick={()=>{Redirect("/register")}}>Have an account ???</Button>
    </div>
    </Card>
    </div>
  </>
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import { Input, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const history = useNavigate();
  function Redirect(path){
    history(path);
  }
  return (
  <>
    <div className='flex justify-center'>
  <div style={{marginTop: "20vh"}}>
  <Card className="m-5 mt-[200px] h-full" variant="outlined">
      <h1 className='text-2xl text-center'>Create Your Free Account</h1>
      <div className='m-3'>
  <TextField id="filled-basic" className='w-full'  type="email" label="Email" variant="filled" />
  </div>
  <div className='m-3'>
 <TextField id="filled-basic" className='w-full' type='password' label="Password" variant="filled" />
 </div>
 <div className='m-3'>
  <Button variant="contained" className='mt-5 w-full'>Register</Button>
  </div>
  <div className='m-3'>
  <Button variant="contained" className='m-5 w-full' onClick={()=>{Redirect("/")}}>Login</Button>
  </div>
  <div className='m-3'>
  <Button variant="contained" className='m-5 w-full' onClick={()=>{Redirect("/forget")}}>Forgot Yout Password ???</Button>
  </div>
  </Card>
  </div>
  </div>
</>);
}
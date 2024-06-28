import * as React from 'react';
import Button from '@mui/material/Button';
import ApplicationBar from '../components/ApplicationBar';


export default function Dashboard() {
  return <>
  <ApplicationBar />
  <Button variant="contained">Hello world</Button>
  </>;
}
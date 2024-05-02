import './App.css';
import ApplicationBar from './components/ApplicationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Forget from './pages/Forget';
function App() {
  return (
    <BrowserRouter basename='/'>
      <ApplicationBar />
      <Routes>
         <Route exact path="/" element={<Login />} />
         <Route exact path="/register" element={<Register />} />
         <Route exact path="/forget" element={<Forget />} />
         <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;

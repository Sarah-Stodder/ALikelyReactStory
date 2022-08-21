import './App.css';
import Navbar from './components/Navbar';
import MyReadingList from './views/MyReadingList';
import Box from '@mui/material/Box';
import {Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Logout from './views/Logout';
import BookList from './views/Books';
import SignUp from './views/SignUp';
import RequireAccount from './components/RequireAccount';
import ShowBook from './components/ShowBook';
import  SnackBar  from './components/SnackBar';




function App() {
  const { user } = useContext(AppContext);
  return (
    <>
    <SnackBar/>
    <Navbar/>
    <Box sx={{minHeight: '90vh'}}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/books" element={<RequireAccount redirectTo={'/login'}><BookList/></RequireAccount>}/>
        <Route path="/books/:bookId" element={<RequireAccount redirectTo={'/login'}><ShowBook/></RequireAccount>}/>
        <Route path="/readinglist" element={<RequireAccount redirectTo={'/login'}><MyReadingList/></RequireAccount>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Box>
    </>
  
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import MyReadingList from './views/MyReadingList';
import Box from '@mui/material/Box';
import {Routes, Route} from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Logout from './views/Logout';
import BookList from './views/Books';
import SignUp from './views/SignUp';
import RequireAccount from './components/RequireAccount';
import ShowBook from './components/ShowBook';
import  SnackBar  from './components/SnackBar';




function App() {
  
  return (
    <>
    <SnackBar/>
    <Navbar/>
    <Box sx={{minHeight: '90vh'}}>
      <Routes>
        <Route path="/ALikelyReactStory" element={<HomePage/>}/>
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

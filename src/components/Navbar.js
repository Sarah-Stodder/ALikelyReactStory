import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {AppContext} from '../context/AppContext'
import {Link} from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';



const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {user} = useContext(AppContext)

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{mr:3}}>
          <Link to='/ALikelyReactStory"'>
            <img height="50px" className='p2' alt="als Logo" src="https://res.cloudinary.com/dxfkurrkj/image/upload/v1661018923/Lovepik_com-401498089-book-book-icon-free-vector-illustration-material_bjyrmt.png"/>
          </Link>
          </Box>
          <Link to ='/ALikelyReactStory' style={{textDecoration:"none"}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/ALikelyReactStory"
            sx={{
              mr: 8,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Lato, sans-serif',
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
             
            }}
          >
            
            A Likely Story
            
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem onClick={handleCloseNavMenu}>
                <Link to='/books' style={{display:"flex", color: 'inherit', textDecoration: 'none'}}>
                  <Typography  textAlign="center">Explore Books</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/readinglist' style={{display:"flex", color: 'inherit', textDecoration: 'none'}}>
                  <Typography  textAlign="center">Reading List</Typography>
                  </Link>
                  </MenuItem>
            </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/ALikelyReactStory"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Lato, sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
          A Likely Story
          </Typography>
          {user?.token?
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/books' style={{textDecoration:"none"}}>
              <Button
                key="explore"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 3, color: 'white', display: 'block', fontFamily:"Lato, sans-serif"}}
              >
                Explore Books
              </Button>
              </Link>
              <Link to='/readinglist' style={{textDecoration:"none"}}>
              <Button
                key="reading"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 3, color: 'white', display: 'block', fontFamily:"Lato, sans-serif" }}
              >
                My Reading List
              </Button>
            </Link>
          </Box>
          :
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to='/login' style={{textDecoration:"none"}}>
            <Button
              key="login-nav"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 3, color: 'white', display: 'block', fontFamily:"Lato, sans-serif"}}
            >
              LOGIN
            </Button>
            </Link>
            <Link to='/signup' style={{textDecoration:"none"}}>
            <Button
              key="signup-nav"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 3, color: 'white', display: 'block', fontFamily:"Lato, sans-serif" }}
            >
              SIGN UP
            </Button>
          </Link>
        </Box>
          }
          <Box sx={{ flexGrow: 0, fontFamily:"Lato, sans-serif" }}>
            <Tooltip title="als">
              <IconButton onClick={handleOpenUserMenu} sx={{  color:"#fffffa", border: '3px solid #6b0504', p:1, backgroundColor:"#3a6ea5", fontFamily:"Lato, sans-serif"}}>
                {user?.first_name? user.first_name[0]: <AutoStoriesIcon/>}{user?.last_name? user.last_name[0]: ""}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user?.token?
                <MenuItem key="editprofile" onClick={handleCloseUserMenu}>
                  
                  <Typography textAlign="center">
                  <Link to='/signup' style={{textDecoration:"none", color:"#05204a", fontFamily:"Lato, sans-serif"}}>
                    Edit Profile
                    </Link>
                    </Typography>
                </MenuItem>
                :
                <Typography color="secondary" sx={{pl:2,pr:2, fontFamily:"Lato, sans-serif"}}>
                Welcome to A Likely Story!
                </Typography>
              }

              {user?.token?
                <MenuItem key="logout" onClick={handleCloseUserMenu}>
                  
                  <Typography textAlign="center">
                  <Link to='/logout' style={{textDecoration:"none", color:"#05204a", fontFamily:"Lato, sans-serif"}}>
                    Logout
                    </Link>
                    </Typography>
                </MenuItem>
                :
                ""
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
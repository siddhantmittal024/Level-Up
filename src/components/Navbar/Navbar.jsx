import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { userSlice } from '../../redux/userSlice';
import { authentication } from '../../firebase/firebase.util';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { stringAvatar } from '../../utils/stringAvatar';

const Navbar = ({ name }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(authentication)
      .then(() => {
        dispatch(userSlice.actions.signOut());
        history.push('/');
        console.log('user is signed out');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link
              to="/dashboard"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              LEVEL UP
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={handleSignOut}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link
              to="/dashboard"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              LEVEL UP
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} mr={5}>
            <Button
              onClick={handleSignOut}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontSize: 18,
                fontWeight: 'bold'
              }}
            >
              Logout
            </Button>
          </Box>
          <Box mr={4}>
            <Avatar {...stringAvatar(name)} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

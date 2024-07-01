import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link, useNavigate } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for the presence of an authentication token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    handleClose();
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='profile-menu-flex'
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {isLoggedIn ? (
          <>
            <MenuItem onClick={handleClose} as={Link} to='/profile'>Profile</MenuItem>
            <MenuItem onClick={handleLogout} as={Link} to='/'>Logout</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleClose} as={Link} to='/register'>Signup</MenuItem>
            <MenuItem onClick={handleClose} as={Link} to='/login'>Login</MenuItem>
          </>
        )}
        <div style={{
            height: "1px", 
            backgroundColor: "var(--grey)",
            width: "100%",
        }}
        />
        <MenuItem onClick={handleClose}>Airbnb Your Home</MenuItem>
        <MenuItem onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}

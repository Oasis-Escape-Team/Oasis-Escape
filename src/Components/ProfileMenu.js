import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { Link, useNavigate } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Signup</MenuItem>
        <MenuItem onClick={handleClose} as={Link} to='/login'>Login</MenuItem>
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

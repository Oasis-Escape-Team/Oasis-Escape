import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';
import Filter from './Filter'; // Import the Filter component
import SearchIcon from '@mui/icons-material/Search'; // import search icon from mui.com
import LanguageIcon from '@mui/icons-material/Language'; // import globe icon 
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';
import MobileSearchBar from './MobileSearchBar';

const Navbar = () => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const filterRef = useRef(null); // Create a ref for the Filter component

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleClearFilters = () => {
    if (filterRef.current) {
      // Communicate the clear filter request to the Filter component
      filterRef.current.handleClearFilters();
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
}

  return (
    <div className='navbar'>
      <Link to={`/`}>
      <img src='/assets/airbnbLogo.png' alt='Logo' className='navbar-logo'/>
      </Link>
      <div className='search-bar'>
        <div className='search-bar-text'>Anywhere</div>
        <div className='search-bar-text'>Any Week</div>
        <div className='search-bar-text2'>Add guests</div>
        <div className='search-icon-div'>
          <SearchIcon className='search-icon'/>
        </div>
      </div>
      <div className='profile-container'>
        <div className='airbnb-your-home'>Airbnb your home</div>
        <div className='airbnb-your-home'>
          <LanguageIcon/>
        </div>
        <div className='profile-div'>
          <BasicMenu/>
        </div>
      </div>
      {/* <MobileSearchBar/> */}
      <SimpleBottomNavigation/>
    </div>
  );
};

export default Navbar;

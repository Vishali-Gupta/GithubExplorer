import './Navbar.css'

import React from 'react'


const Navbar = ({ user }) => (
 <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <img 
    src={user.avatar_url}
    width="50"
    height="50"
    className='mr-3 avatar'
    alt ="profile"
    />
    <h3 style={{ color :"white"}}>{user.name}</h3>

    <a className=' search-btn ml-auto d-flex align-items-center' href='#'>
        Search for other user
    </a>
 </nav>
);

export default Navbar
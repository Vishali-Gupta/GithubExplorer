import './Navbar.css'

import React from 'react'


const Navbar = ({user }) => (
 <nav className='navbar  navbar-dark bg-dark'>
    <img 
    src={user.avatar_url}
    width="50"
    height="50"
    className='mr-3 avatar'
    alt ="profile"
    />
    <h3 className='head' style={{ color :"white"}}>{user.login}</h3>
    {/* console.log(user.name); */}



    <a className=' search-btn ml-auto d-flex align-items-center' href='/'>

    <button type="button" className='button' >
    {/* <i className=' search fa fa-search'/> */}
        search for other github user
    
    {/* <p className='p-tag'>
        
        
        </p> */}
     </button>
        
   
    </a>
 </nav>
);

export default Navbar
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import UserInfo from '../component/UserInfo'
import Tabs from '../component/Tabs'
import Repositories from '../component/Repositories'
import Loading from '../component/Loading'
import {getUserData, getUserRepo} from '../api/Api'
import {useParams} from "react-router-dom";

function UserPage({match}) {
  const [user, setUser]=useState()
  const [repos,setRepos]=useState([])
  const userNameParams=match?.params?.userName;
  const id=useParams;
  console.log(id);

  useEffect(()=>{
    fetchUser();
    fetchRepos();

  },[]);
  

  async function fetchUser(){
    const {data}=await getUserData(userNameParams);
    // console.log(data);
    setUser(data);
    
  }
    async function fetchRepos(){
    const {data}=await getUserData(userNameParams);
    setRepos(data);
  }
  return (
    <>
      {user ?(
        <>
        <Navbar user={user}/>
        <div className='container'>
        <UserInfo user={user}/>
        <Tabs repos={repos} user={user}/>
        <Repositories repos={repos} user={user}/>
         </div>
        
        </>
      ): (
        <Loading />
        // <div></div>
      )}
    </>
    
  
  );
}

export default UserPage
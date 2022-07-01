import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import UserInfo from "../component/UserInfo";
import Tabs from "../component/Tabs";
import Repositories from "../component/Repositories";
import Loading from "../component/Loading";
import { getUserData, getUserRepo } from "../api/Api";

function UserPage() {
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);
  const [name, setName] = useState("");
  async function fetchUser() {
    const { data } = await getUserRepo(name);
    // console.log(data);
    setUser(data);
  }
  async function fetchRepos() {
    const { data } = await getUserData(name);
    setRepos(data);
  }

  useEffect(() => {
    let NewName = window.prompt("Please Enter your Name");
    if (NewName) {
      setName(NewName);
    } else {
      setName("VaibhavKhushalani");
    }
  }, []);

  useEffect(() => {
    if (name) {
      fetchUser();
      fetchRepos();
    }
  }, [name]);
  console.log(name);
  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfo user={user} />
            <Tabs repos={repos} user={user} />
            <Repositories repos={repos} user={user} />
          </div>
        </>
      ) : (
        <Loading />
        // <div></div>
      )}
    </>
  );
}

export default UserPage;

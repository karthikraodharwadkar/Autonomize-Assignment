import React, { useContext } from "react";
import { userContext } from "../../App";
import axios from "axios";
import "./SearchUser.css";
import { useNavigate } from "react-router-dom";

export default function SearchUser() {
  const {
    searchUserName,
    setSearchUserName,
    setUserRepo,
    setUserInfo,
    setFollowers,
    setLoading,
  } = useContext(userContext);

  const navigate = useNavigate();
  const handleUserName = (event) => {
    setSearchUserName(event.target.value);
  };

  const fetchRepos = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        `https://api.github.com/users/${searchUserName}/repos`
      );
      let followersList = await axios.get(
        `https://api.github.com/users/${searchUserName}/followers`
      );
      setFollowers(followersList.data);
      setUserRepo(response.data);
      setUserInfo(response.data[0].owner);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-user-container">
      <input
        type="text"
        value={searchUserName}
        onChange={handleUserName}
        placeholder="Enter UserName"
        className="searchBar"
      />
      <button onClick={fetchRepos} className="search-btn">
        Search
      </button>
    </div>
  );
}

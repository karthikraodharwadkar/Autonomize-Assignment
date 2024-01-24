import React, { useContext } from "react";
import UserInformation from "../UserInformation/UserInformation";
import { userContext } from "../../App";
import "./Followers.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Followers() {
  const {
    followers,
    setSearchUserName,
    setFollowers,
    setUserRepo,
    setUserInfo,
  } = useContext(userContext);

  const navigate = useNavigate();

  const handleFollowerRepo = async (name) => {
    setSearchUserName("");
    try {
      let response = await axios.get(
        `https://api.github.com/users/${name}/repos`
      );
      let followersList = await axios.get(
        `https://api.github.com/users/${name}/followers`
      );
      setFollowers(followersList.data);
      setUserRepo(response.data);
      setUserInfo(response.data[0].owner);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    navigate("/followerRepo");
  };

  return (
    <div className="followers-container">
      <div className="user-information-container">
        <UserInformation />
      </div>
      <div style={{ fontSize: "20px", fontWeight: "600" }}>Followers List</div>
      <div className="followers-list">
        {followers.map((item, index) => {
          return (
            <div
              key={index}
              className="follower-list-container"
              onClick={() => handleFollowerRepo(item.login)}
            >
              <div className="followers-list-image">
                <img src={item.avatar_url} alt="follower-img" />
              </div>
              <div>
                <p>{item.login}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

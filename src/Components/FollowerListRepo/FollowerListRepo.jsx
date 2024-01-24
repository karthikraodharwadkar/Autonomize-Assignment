import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import UserInformation from "../../UserInformation/UserInformation";
import UserRepo from "../UserRepo/UserRepo";
import "./FollowerListRepo.css";

export default function FollowerListRepo() {
  return (
    <div className="follower-list-repo">
      <SearchUser />
      <UserInformation />
      <UserRepo />
    </div>
  );
}

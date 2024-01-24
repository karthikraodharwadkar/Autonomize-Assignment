import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import UserRepo from "../UserRepo/UserRepo";
import UserInformation from "../UserInformation/UserInformation";
import "./LandingPage.css";


export default function LandingPage() {
  return (
    <div className="landingPage-container">
      <SearchUser />
      <UserInformation />
      <UserRepo />
    </div>
  );
}

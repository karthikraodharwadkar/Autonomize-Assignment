import React, { useContext } from "react";
import { userContext } from "../../App";
import "./UserInformation.css";
import { useNavigate } from "react-router-dom";

export default function UserInformation() {
  const navigate = useNavigate();

  const { userInfo, userrepo, followers } = useContext(userContext);

  const handleFollowers = () => {
    navigate("/followers");
  };

  return (
    <div className="user-info-container">
      {userInfo?.length > 0 || userInfo?.login?.length > 0 ? (
        <>
          <div className="user-info-image" onClick={() => navigate("/")}>
            <img src={userInfo.avatar_url} alt="user-img" />
            <p className="user-name">{userInfo.login}</p>
          </div>
          <div className="user-info-details">
            <p>Repositories : {userrepo.length}</p>
            <p>
              Followers :{" "}
              <span
                style={{
                  color: "blue",
                  borderBottom: "1px solid blue",
                  cursor: "pointer",
                }}
                onClick={handleFollowers}
              >
                {followers.length}
              </span>
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

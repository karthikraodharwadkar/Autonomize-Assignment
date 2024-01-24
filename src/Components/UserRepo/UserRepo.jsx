import React, { useContext } from "react";
import { userContext } from "../../App";
import { MdVerified } from "react-icons/md";
import "./UserRepo.css";
import { useNavigate } from "react-router-dom";

export default function UserRepo() {
  const { userrepo, setSelectedRepo, loading } = useContext(userContext);
  const navigate = useNavigate();

  const handleSelectedRepo = (id) => {
    let filteredRepo = userrepo.filter((item) => item.id === id);
    setSelectedRepo(filteredRepo[0]);
    navigate(`/${id}`);
  };

  return (
    <>
      <div style={{fontSize:"20px",fontWeight:"600"}}>GitHub Repositories</div>
      <div className="user-repo-container">
        {loading ? (
          <>
            <div style={{ backgroundColor: "white", fontSize: "20px" }}>
              Loading...
            </div>
          </>
        ) : (
          userrepo.map((item, index) => {
            return (
              <div
                className="user-repo-lists"
                key={index}
                onClick={() => handleSelectedRepo(item.id)}
              >
                <div className="repo-image">
                  <img src={item.owner.avatar_url} alt="repo_name" />
                </div>
                <div className="repo-details">
                  <p className="repo-name">
                    {item.name}{" "}
                    <span>
                      <MdVerified className="verified-logo" />
                    </span>
                  </p>
                  <p className="repo-desc">{item.description}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

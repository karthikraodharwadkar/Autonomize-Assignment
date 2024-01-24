import React, { useContext } from "react";
import "./RepoDetails.css";
import { MdVerified } from "react-icons/md";
import { userContext } from "../../App";
import "./RepoDetails.css";
import { useNavigate } from "react-router-dom";

export default function RepoDetails() {
  const navigate = useNavigate();
  const { selectedRepo } = useContext(userContext);

  return (
    <>
      <div className="repo-details-main-container">
        <div className="repo-details-container">
          <div className="repo-details-left-section">
            <div className="repo-details-image" onClick={() => navigate("/")}>
              <img src={selectedRepo.owner.avatar_url} alt="repo-img" />
            </div>
            <div className="repo-details-git-info">
              <p className="github-verified">
                <span>
                  <MdVerified className="verified-logo" />
                </span>
                Verified by Github
              </p>
              <p>
                Github confirms that this app meets the{" "}
                <span style={{ color: "blue" }}>
                  requirements for verification.
                </span>
              </p>
            </div>
            <div className="repo-details-category">
              <p>Categories</p>
              <div className="categories-btns">
                <button
                  style={{ backgroundColor: "lightblue", border: "none" }}
                >
                  Code review
                </button>
                <button
                  style={{ backgroundColor: "lightblue", border: "none" }}
                >
                  IDEs
                </button>
                <button>Free</button>
                <button>Paid</button>
              </div>
            </div>
          </div>
          <div className="repo-details-right-section">
            <p className="repo-right-header">Application</p>
            <div className="repo-detail-name-btn">
              <p>{selectedRepo.name}</p>
              <button>Set up a plan</button>
            </div>
            <div className="repo-right-desc">
              <p>
                <span style={{ color: "blue", fontWeight: "600" }}>
                  {selectedRepo.name}
                </span>{" "}
                {selectedRepo.description}
              </p>
            </div>
            <div className="repo-right-info">
              <p>
                It launches a complete dev environment for any Github project,
                by simply prefixing the Github URL with{" "}
                <span style={{ fontWeight: "600" }}>
                  {selectedRepo.name}/#.
                </span>
              </p>
              <p>
                Install this app and get your project prebuild, so you don't
                have to wait for your build downloading the internet when
                starting a{selectedRepo.name} workspace.🚀
              </p>
              <p>
                {selectedRepo.name} is{" "}
                <span style={{ fontWeight: "600" }}>
                  the first IDE that builds your project before you even open
                  it.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

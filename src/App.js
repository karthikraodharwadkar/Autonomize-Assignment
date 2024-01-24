import { createContext, useState } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import RepoDetails from "./Components/RepoDetails/RepoDetails";
import Followers from "./Components/Followers/Followers";
import FollowerListRepo from "./Components/FollowerListRepo/FollowerListRepo";

export const userContext = createContext();

function App() {

  const [searchUserName, setSearchUserName] = useState("");

  const [userrepo, setUserRepo] = useState([]);

  const [userInfo, setUserInfo] = useState([]);

  const [selectedRepo, setSelectedRepo] = useState([]);

  const [followers, setFollowers] = useState([]);

  const [loading,setLoading] = useState(false)


  return (
    <div className="App">
      <userContext.Provider
        value={{
          searchUserName,
          setSearchUserName,
          userrepo,
          setUserRepo,
          userInfo,
          setUserInfo,
          selectedRepo,
          setSelectedRepo,
          followers,
          setFollowers,
          loading,setLoading
        }}
      >
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={`/${selectedRepo.id}`} element={<RepoDetails />} />
          <Route path={"/followers"} element={<Followers />} />
          <Route path={"/followerrepo"} element={<FollowerListRepo />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;

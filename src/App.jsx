import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./main.css";
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import axios from "axios";
import SkeletonColor from "./components/Skeleton";

function App() {
  const [user, setUser] = useState("itzjustfitb");
  const [access, setAccess] = useState(true);
  const [profile, setProfile] = useState([]);
  const [repos, setRepos] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [starred, setStarred] = useState([]);

  const url = `https://api.github.com/users/${user}`;

  const fetchData = async () => {
    try {
      const profileRes = await axios.get(url);
      const reposRes = await axios.get(url + "/repos");
      const followersRes = await axios.get(url + "/followers");
      const followingRes = await axios.get(url + "/following");
      const starredRes = await axios.get(url + "/starred");
      setProfile(profileRes.data);
      setRepos(reposRes.data);
      setFollowers(followersRes.data);
      setFollowing(followingRes.data);
      setStarred(starredRes.data);
      setAccess(true);
    } catch (error) {
      setAccess(false);
      if (error.response && error.response.status === 403) {
        console.error("API rate limit exceeded. Retry after some time.");
      } else {
        console.error("Error fetching data:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <>
      <Header setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              access={access}
              profile={profile}
              repos={repos}
              following={following}
              followers={followers}
              starred={starred}
              user={user}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
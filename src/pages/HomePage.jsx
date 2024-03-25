import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import Repo from "../components/Repo";
import User from "../components/User";
import ErrorMessage from "../components/ErrorComponent";
import { Skeleton } from "@mui/material";
import SkeletonColor from "../components/Skeleton";

function HomePage({ access, profile, repos, following, followers, starred }) {
  const [active, setActive] = useState("Repositories");
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [repos, followers, followers, starred]);

  return (
    <main id="home">
      <div className="home__container">
        {access ? (
          <>
            <Profile data={profile} />
            <div className="home__right">
              <Navigation
                repos={repos}
                following={following}
                followers={followers}
                starred={starred}
                active={active}
                setActive={setActive}
              />
              <div className="home__datas">
                {active === "Repositories" ? (
                  isloading ? (
                    repos.length ? (
                      repos.map((repo) => <Repo data={repo} key={repo.id} />)
                    ) : (
                      <ErrorMessage tab={"repositories"} type={""} />
                    )
                  ) : (
                    <SkeletonColor />
                  )
                ) : active === "Starred" ? (
                  starred.length ? (
                    starred.map((repo) => <Repo key={repo.id} data={repo} />)
                  ) : (
                    <ErrorMessage tab={"starred"} type={"repositories"} />
                  )
                ) : active === "Following" ? (
                  following.length ? (
                    following.map((user) => <User key={user.id} data={user} />)
                  ) : (
                    <ErrorMessage tab={"followings"} type={""} />
                  )
                ) : active === "Followers" ? (
                  followers.length ? (
                    followers.map((user) => <User data={user} key={user.id} />)
                  ) : (
                    <ErrorMessage tab={"followers"} type={""} />
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ) : (
          <ErrorMessage type={"user"} tab={""} />
        )}
      </div>
    </main>
  );
}

export default HomePage;

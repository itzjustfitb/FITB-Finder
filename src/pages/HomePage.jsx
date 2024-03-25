import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import Repo from "../components/Repo";
import User from "../components/User";
import ErrorMessage from "../components/ErrorComponent";
import { Skeleton } from "@mui/material";

function HomePage({
  isLoading,
  access,
  profile,
  repos,
  following,
  followers,
  starred,
}) {
  const [active, setActive] = useState("Repositories");

  return (
    <main id="home">
      <div className="home__container">
        {access ? (
          <>
            {!isLoading ? (
              <Profile data={profile} />
            ) : (
              <>
                <div className="profile">
                  <Skeleton
                    sx={{ bgcolor: "#1a263d" }}
                    variant="circular"
                    width={100}
                    height={100}
                  />
                  <Skeleton
                    sx={{ bgcolor: "#1a263d", fontSize: "2rem" }}
                    variant="text"
                  />
                  <Skeleton
                    sx={{ bgcolor: "#1a263d" }}
                    variant="rectangular"
                    width={"100%"}
                    height={60}
                  />
                  <Skeleton
                    sx={{ bgcolor: "#1a263d" }}
                    variant="rounded"
                    width={"100%"}
                    height={240}
                  />
                </div>
              </>
            )}
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
                  !isLoading ? (
                    repos.length ? (
                      repos.map((repo) => <Repo data={repo} key={repo.id} />)
                    ) : (
                      <ErrorMessage tab={"repositories"} type={""} />
                    )
                  ) : (
                    <>
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                    </>
                  )
                ) : active === "Starred" ? (
                  !isLoading ? (
                    starred.length ? (
                      starred.map((repo) => <Repo key={repo.id} data={repo} />)
                    ) : (
                      <ErrorMessage tab={"starred"} type={"repositories"} />
                    )
                  ) : (
                    <>
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                    </>
                  )
                ) : active === "Following" ? (
                  !isLoading ? (
                    following.length ? (
                      following.map((user) => (
                        <User key={user.id} data={user} />
                      ))
                    ) : (
                      <ErrorMessage tab={"followings"} type={""} />
                    )
                  ) : (
                    <>
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                    </>
                  )
                ) : active === "Followers" ? (
                  !isLoading ? (
                    followers.length ? (
                      followers.map((user) => (
                        <User data={user} key={user.id} />
                      ))
                    ) : (
                      <ErrorMessage tab={"followers"} type={""} />
                    )
                  ) : (
                    <>
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                      <Skeleton
                        sx={{ bgcolor: "#1a263d" }}
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                      />
                    </>
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

import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation({
  repos,
  following,
  followers,
  starred,
  active,
  setActive,
}) {
  const navigations = [
    {
      name: "Repositories",
      count: repos?.length,
      tab: "repos",
    },
    {
      name: "Starred",
      count: starred?.length,
      tab: "starred",
    },
    {
      name: "Followers",
      count: followers?.length,
      tab: "followers",
    },
    {
      name: "Following",
      count: following?.length,
      tab: "following",
    },
  ];

  return (
    <nav>
      <ul>
        {navigations.map((nav) => {
          return (
            <li
              key={nav.name}
              className={active === nav.name ? "active__row" : ""}
              onClick={() => {
                setActive(nav.name);
              }}
            >
              <Link to={`#`}>
                <p>{nav.name}</p>
                <span>{nav.count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;

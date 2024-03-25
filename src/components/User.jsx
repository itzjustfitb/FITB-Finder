import React from "react";
import { Link } from "react-router-dom";

function User({ data }) {
  return (
    <div className="user">
      <div className="user__container">
        <img src={data.avatar_url} alt="" />
        <h1>{data.login}</h1>
        <Link target="_blank" to={data.html_url}>
          <i className="ri-links-line"></i>
        </Link>
      </div>
    </div>
  );
}

export default User;

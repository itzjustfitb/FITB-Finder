import React from "react";
import { Link } from "react-router-dom";

function Repo({ data }) {
  let pushedDate = new Date(data.pushed_at);
  let currentDate = new Date();
  const differenceInMilliseconds = currentDate - pushedDate;
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const millisecondsInAWeek = millisecondsInADay * 7;
  const millisecondsInAMonth = millisecondsInADay * 30;
  const millisecondsInAYear = 365 * 24 * 60 * 60 * 1000;

  const days = Math.floor(differenceInMilliseconds / millisecondsInADay);
  const weeks = Math.floor(differenceInMilliseconds / millisecondsInAWeek);
  const months = Math.floor(differenceInMilliseconds / millisecondsInAMonth);
  const years = Math.floor(differenceInMilliseconds / millisecondsInAYear);

  return (
    <div className="repo">
      <div className="repo__top">
        <Link target="_blank" to={data.html_url}>
          <h1>{data.name}</h1>
        </Link>
        {days <= 7 ? (
          <p>
            Updated {days} {days === 1 ? "day" : "days"} ago
          </p>
        ) : days <= 28 ? (
          <p>
            Updated {weeks} {weeks === 1 ? "week" : "weeks"} ago
          </p>
        ) : days >= 365 ? (
          <p>
            Updated {years} {years === 1 ? "year" : "years"} ago
          </p>
        ) : days >= 30 ? (
          <p>
            Updated {months} {months === 1 ? "month" : "months"} ago
          </p>
        ) : (
          ""
        )}

        <span>{data.visibility}</span>
      </div>
      <div className="repo__bottom">
        {data.language ? (
          <div className="repo__icon">
            <i className="ri-file-code-fill"></i>
            <p>{data.language}</p>
          </div>
        ) : (
          ""
        )}
        <div className="repo__icon">
          <i className="ri-eye-fill"></i>
          <p>{data.watchers}</p>
        </div>
      </div>
    </div>
  );
}

export default Repo;
